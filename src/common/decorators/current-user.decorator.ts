/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUserModel } from 'src/app/user/domain/model/shared/user.model';

export const User = createParamDecorator(
  (_, ctx: ExecutionContext): IUserModel => {
    const request = ctx.switchToHttp().getRequest();
    return request.userModel as IUserModel;
  },
);
