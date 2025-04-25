/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, from, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UserResolveUseCase } from 'src/app/user/use-cases/user-resolve.use-case';
import { RequestUser } from 'src/utils/types/request-user';

@Injectable()
export class ResolveUserInterceptor implements NestInterceptor {
  constructor(private readonly userResolveUseCase: UserResolveUseCase) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const requestUser = req.user as RequestUser;
    const partnerId = requestUser.sub;

    if (!partnerId) {
      return throwError(() => new Error('Missing Auth0 user ID'));
    }

    return from(this.userResolveUseCase.execute({ partnerId })).pipe(
      mergeMap((userResult) => {
        if (userResult.isOk()) {
          req.userModel = userResult.value;
          return next.handle();
        }

        return throwError(
          () =>
            new HttpException(
              userResult.error.message,
              userResult.error.statusCode,
            ),
        );
      }),
    );
  }
}
