import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/filter-user.dto';
import { Types } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() queryUserDto: QueryUserDto) {
    return this.usersService.findAll(queryUserDto);
  }

  @Get(':id')
  findOne(@Param('id') _id: Types.ObjectId) {
    return this.usersService.findOne(_id);
  }

  @Patch(':id')
  update(
    @Param('id') _id: Types.ObjectId,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(_id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: Types.ObjectId) {
    return this.usersService.remove(_id);
  }
}
