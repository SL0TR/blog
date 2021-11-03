import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from '../../common/enums/role.enum';
import * as uniqueValidator from 'mongoose-unique-validator';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id: Types.ObjectId;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  password: string;

  @Prop({ required: true, default: Role.User })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(uniqueValidator);
