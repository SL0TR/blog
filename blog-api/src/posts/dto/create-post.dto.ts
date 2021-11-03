import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Types } from 'mongoose';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  @IsOptional()
  thumbnailUrl?: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}

export class CreatePost extends CreatePostDto {
  author: Types.ObjectId;
}
