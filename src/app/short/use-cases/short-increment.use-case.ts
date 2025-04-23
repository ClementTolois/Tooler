import { Inject } from '@nestjs/common';
import {
  IShortRepository,
  SHORT_REPOSITORY,
} from '../domain/interfaces/repositories/short.repository.interface';
import { IShortToIncrementModel } from '../domain/model/short-to-increment.model';
import { Result } from 'neverthrow';
import { IShortModel } from '../domain/model/shared/short.model';
import { ApiError } from 'src/core/errors/api-error';
import { IShortIncrementUseCase } from '../domain/interfaces/use-cases/short-increment.use-case.interface';

export class ShortIncrementUseCase implements IShortIncrementUseCase {
  constructor(
    @Inject(SHORT_REPOSITORY)
    private readonly shortRepository: IShortRepository,
  ) {}

  async execute(
    model: IShortToIncrementModel,
  ): Promise<Result<IShortModel, ApiError>> {
    return this.shortRepository.increment(model);
  }
}
