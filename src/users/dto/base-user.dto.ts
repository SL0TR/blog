import { IsEmail, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class BaseUserDto {
  @IsString()
  _id?: Types.ObjectId;

  @IsEmail()
  email: string;
}
