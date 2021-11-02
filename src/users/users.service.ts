import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { QueryResponseDTO } from '../commong/dto/query-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto, QueryUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findAll(queryUserDto: QueryUserDto) {
    const response = new QueryResponseDTO<User>();
    const { limit = 100, offset, ...rest } = queryUserDto;
    const filter = { ...rest } || {};
    const skip = offset - 1 || 0;

    response.totalCount = await this.userModel.countDocuments({
      ...filter,
    });

    response.data = await this.userModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .exec();
    response.success = true;

    return response;
  }

  async findOne(filterUserDto: FilterUserDto) {
    const user = await this.userModel.findOne(filterUserDto).exec();
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async update(_id: Types.ObjectId, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel
      .findOneAndUpdate({ _id }, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException();
    }

    return updatedUser;
  }

  async remove(_id: Types.ObjectId) {
    const user = await this.userModel.findOneAndDelete({ _id }).exec();
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
