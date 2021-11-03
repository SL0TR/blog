import { PartialType } from '@nestjs/mapped-types';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { BaseUserDto } from './base-user.dto';

export class FilterUserDto extends PartialType(BaseUserDto) {}

export class QueryUserDto extends PaginationQueryDto {}
