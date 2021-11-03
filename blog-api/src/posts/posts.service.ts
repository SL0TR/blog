import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from './entities/post.entity';
import { FilterPostDto, QueryPostDto } from './dto/filter-post.dto';
import { QueryResponseDTO } from '../common/dto/query-response.dto';
@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postModel.create(createPostDto);
  }

  async findAll(queryPostDto: QueryPostDto) {
    const response = new QueryResponseDTO<Post>();
    const { limit = 100, offset, ...rest } = queryPostDto;
    const filter = { ...rest } || {};
    const skip = offset - 1 || 0;

    response.totalCount = await this.postModel.countDocuments({
      ...filter,
    });

    response.data = await this.postModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .exec();
    response.success = true;

    return response;
  }

  async findOne(filterPostDto: FilterPostDto) {
    const post = await this.postModel.findOne(filterPostDto).exec();
    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  async update(_id: Types.ObjectId, updatePostDto: UpdatePostDto) {
    const updatedPost = await this.postModel
      .findOneAndUpdate({ _id }, updatePostDto, { new: true })
      .exec();
    if (!updatedPost) {
      throw new NotFoundException();
    }

    return updatedPost;
  }

  async remove(filterPostDto: FilterPostDto) {
    const post = await this.postModel.findOneAndDelete(filterPostDto).exec();
    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }
}