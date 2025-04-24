import { Inject } from '@nestjs/common';
import {
  IShortRepository,
  SHORT_REPOSITORY,
} from '../domain/interfaces/repositories/short.repository.interface';
import { IShortDeleteUseCase } from '../domain/interfaces/use-cases/short-delete.use-case.interface';
import { IShortToDeleteModel } from '../domain/model/short-to-delete.model';
import { Result } from 'neverthrow';
import { IShortModel } from '../domain/model/shared/short.model';
import { ApiError } from 'src/utils/errors/api-error';

export class ShortDeleteUseCase implements IShortDeleteUseCase {
  constructor(
    @Inject(SHORT_REPOSITORY)
    private readonly shortRepository: IShortRepository,
  ) {}

  async execute(
    model: IShortToDeleteModel,
  ): Promise<Result<IShortModel, ApiError>> {
    return this.shortRepository.delete(model);
  }
}
