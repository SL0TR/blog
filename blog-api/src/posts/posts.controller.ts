import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/filter-post.dto';
import { Types } from 'mongoose';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/user.decorator';

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@CurrentUser() user, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create({ ...createPostDto, author: user._id });
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
    @CurrentUser() user,
    @Param('id') _id: Types.ObjectId,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update({ _id, updatePostDto, author: user._id });
  }

  @Delete(':id')
  remove(@CurrentUser() user, @Param('id') _id: Types.ObjectId) {
    return this.postsService.remove({ _id, author: user._id });
  }
}
