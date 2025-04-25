import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserResolveUseCase } from './use-cases/user-resolve.use-case';
import { USER_REPOSITORY } from './domain/interfaces/repositories/user.repository.interface';
import { UserRepository } from './infrastructure/dao/repositories/user.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    UserResolveUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  exports: [UserResolveUseCase],
})
export class UserModule {}
