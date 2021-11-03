import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class BasePostDto {
  @IsString()
  _id?: Types.ObjectId;

  @IsString()
  author: Types.ObjectId;
}
