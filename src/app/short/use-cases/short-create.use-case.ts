import { Inject } from '@nestjs/common';
import {
  IShortRepository,
  SHORT_REPOSITORY,
} from '../domain/interfaces/repositories/short.repository.interface';
import { IShortCreateUseCase } from '../domain/interfaces/use-cases/short-create.use-case.interface';
import { IShortToCreateModel } from '../domain/model/short-to-create.model';
import { Result } from 'neverthrow';
import { IShortModel } from '../domain/model/shared/short.model';
import { ApiError } from 'src/utils/errors/api-error';

export class ShortCreateUseCase implements IShortCreateUseCase {
  constructor(
    @Inject(SHORT_REPOSITORY)
    private readonly shortRepository: IShortRepository,
  ) {}

  async execute(
    model: IShortToCreateModel,
  ): Promise<Result<IShortModel, ApiError>> {
    return this.shortRepository.create(model);
  }
}
