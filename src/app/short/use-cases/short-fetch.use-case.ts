import { Inject } from '@nestjs/common';
import {
  IShortRepository,
  SHORT_REPOSITORY,
} from '../domain/interfaces/repositories/short.repository.interface';
import { IShortFetchUseCase } from '../domain/interfaces/use-cases/short-fetch.use-case.interface';
import { IShortToFetchModel } from '../domain/model/short-to-fetch.model';
import { Result } from 'neverthrow';
import { IShortModel } from '../domain/model/shared/short.model';
import { ApiError } from 'src/core/errors/api-error';

export class ShortFetchUseCase implements IShortFetchUseCase {
  constructor(
    @Inject(SHORT_REPOSITORY)
    private readonly shortRepository: IShortRepository,
  ) {}

  async execute(
    model: IShortToFetchModel,
  ): Promise<Result<IShortModel, ApiError>> {
    return this.shortRepository.fetch(model);
  }
}
