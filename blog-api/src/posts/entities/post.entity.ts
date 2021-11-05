import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/entities/user.entity';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  _id?: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  thumbnailUrl?: string;

  @Prop({ required: true })
  body: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  author: Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);
