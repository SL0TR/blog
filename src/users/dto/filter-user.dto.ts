import { PartialType } from '@nestjs/mapped-types';
import { PaginationQueryDto } from '../../commong/dto/pagination-query.dto';
import { BaseUserDto } from './base-user.dto';

export class FilterUserDto extends PartialType(BaseUserDto) {}

export class QueryUserDto extends PaginationQueryDto {}
