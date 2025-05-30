import { Result } from 'neverthrow';
import { ApiError } from 'src/utils/errors/api-error';
import { IListFetchUseCase } from '../domain/interfaces/use-cases/list-fetch.use-case.interface';
import { IListToFetchModel } from '../domain/model/list-to-fetch.model';
import { IListModel } from '../domain/model/shared/list.model';
import { Inject, Injectable } from '@nestjs/common';
import {
  type IListRepository,
  LIST_REPOSITORY,
} from '../domain/interfaces/repositories/list.repository.interface';

@Injectable()
export class ListFetchUseCase implements IListFetchUseCase {
  constructor(
    @Inject(LIST_REPOSITORY)
    private readonly listRepository: IListRepository,
  ) {}

  async execute(
    model: IListToFetchModel,
  ): Promise<Result<IListModel, ApiError>> {
    return this.listRepository.fetch(model);
  }
}
