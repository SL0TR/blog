import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Types } from 'mongoose';
import * as sanitizeHtml from 'sanitize-html';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  @IsOptional()
  thumbnailUrl?: string;

  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  @IsNotEmpty()
  body: string;
}

export class CreatePost extends CreatePostDto {
  author: Types.ObjectId;
}
