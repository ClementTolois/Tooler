import type { Result } from 'neverthrow';
import type { ApiError } from 'src/core/errors/api-error';
import type { IListCreateUseCase } from '../domain/interfaces/use-cases/list-create.use-case.interface';
import type { IListToCreateModel } from '../domain/model/list-to-create.model';
import type { IListModel } from '../domain/model/shared/list.model';
import { Inject, Injectable } from '@nestjs/common';
import {
  type IListRepository,
  LIST_REPOSITORY,
} from '../domain/interfaces/repositories/list.repository.interface';

@Injectable()
export class ListCreateUseCase implements IListCreateUseCase {
  constructor(
    @Inject(LIST_REPOSITORY)
    private readonly listRepository: IListRepository,
  ) {}

  async execute(
    model: IListToCreateModel,
  ): Promise<Result<IListModel, ApiError>> {
    return this.listRepository.create(model);
  }
}
