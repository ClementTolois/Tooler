import { Module } from '@nestjs/common';
import { ShortController } from './short.controller';
import { SController } from './s.controller';
import { SHORT_REPOSITORY } from './domain/interfaces/repositories/short.repository.interface';
import { ShortRepository } from './infrastructure/dao/repositories/short.repository';
import { ShortCreateUseCase } from './use-cases/short-create.use-case';
import { ShortDeleteUseCase } from './use-cases/short-delete.use-case';
import { ShortFetchUseCase } from './use-cases/short-fetch.use-case';
import { ShortIncrementUseCase } from './use-cases/short-increment.use-case';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ShortController, SController],
  providers: [
    ShortCreateUseCase,
    ShortIncrementUseCase,
    ShortDeleteUseCase,
    ShortFetchUseCase,
    {
      provide: SHORT_REPOSITORY,
      useClass: ShortRepository,
    },
  ],
})
export class ShortModule {}
