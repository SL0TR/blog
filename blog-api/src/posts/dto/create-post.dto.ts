import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Types } from 'mongoose';
import * as sanitizeHtml from 'sanitize-html';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  thumbnailUrl?: string;

  @IsString()
  @IsNotEmpty()
  @Transform((value) => sanitizeHtml(value))
  body: string;

  @IsString()
  @IsNotEmpty()
  author: Types.ObjectId;
}
