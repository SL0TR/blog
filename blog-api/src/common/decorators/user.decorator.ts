import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const { _id, username, roles } = ctx.switchToHttp().getRequest().user;

    return {
      _id,
      username,
      roles,
    };
  },
);
