import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListCreateUseCase } from './use-cases/list-create.use-case';
import { LIST_REPOSITORY } from './domain/interfaces/repositories/list.repository.interface';
import { ListRepository } from './infrastructure/dao/repositories/list.repository';
import { ListUpdateUseCase } from './use-cases/list-update.use-case';
import { ListFetchUseCase } from './use-cases/list-fetch.use-case';
import { ListDeleteUseCase } from './use-cases/list-delete.use-case';
import { ListListUseCase } from './use-cases/list-list.use-case';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [ListController],
  providers: [
    ListCreateUseCase,
    ListUpdateUseCase,
    ListFetchUseCase,
    ListDeleteUseCase,
    ListListUseCase,
    {
      provide: LIST_REPOSITORY,
      useClass: ListRepository,
    },
  ],
})
export class ListModule {}
