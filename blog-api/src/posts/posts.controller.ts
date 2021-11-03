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
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/filter-post.dto';
import { Types } from 'mongoose';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Query() queryPostDto: QueryPostDto) {
    return this.postsService.findAll(queryPostDto);
  }

  @Get(':id')
  findOne(@Param('id') _id: Types.ObjectId) {
    return this.postsService.findOne({ _id });
  }

  @Patch(':id')
  update(
    @Param('id') _id: Types.ObjectId,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(_id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: Types.ObjectId) {
    return this.postsService.remove({ _id });
  }
}
