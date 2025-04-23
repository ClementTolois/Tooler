import { Result } from 'neverthrow';
import { ApiError } from 'src/core/errors/api-error';
import { IListDeleteUseCase } from '../domain/interfaces/use-cases/list-delete.use-case.interface';
import { IListToDeleteModel } from '../domain/model/list-to-delete.model';
import { IListModel } from '../domain/model/shared/list.model';
import { Inject, Injectable } from '@nestjs/common';
import {
  type IListRepository,
  LIST_REPOSITORY,
} from '../domain/interfaces/repositories/list.repository.interface';

@Injectable()
export class ListDeleteUseCase implements IListDeleteUseCase {
  constructor(
    @Inject(LIST_REPOSITORY)
    private readonly listRepository: IListRepository,
  ) {}

  async execute(
    model: IListToDeleteModel,
  ): Promise<Result<IListModel, ApiError>> {
    return this.listRepository.delete(model);
  }
}
