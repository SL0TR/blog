import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { BasePostDto } from './base-post.dto';

export class FilterPostDto extends PartialType(BasePostDto) {}

export class QueryPostDto extends PaginationQueryDto {
  @IsString()
  @IsOptional()
  author?: string;
}
