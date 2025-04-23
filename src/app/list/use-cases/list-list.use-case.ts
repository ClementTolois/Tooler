import type { Result } from 'neverthrow';
import type { ApiError } from 'src/core/errors/api-error';
import type { IListListUseCase } from '../domain/interfaces/use-cases/list-list.use-case.interface';
import { Inject, Injectable } from '@nestjs/common';
import {
  type IListRepository,
  LIST_REPOSITORY,
} from '../domain/interfaces/repositories/list.repository.interface';
import type { IListListModel } from '../domain/model/shared/list-list.model';

@Injectable()
export class ListListUseCase implements IListListUseCase {
  constructor(
    @Inject(LIST_REPOSITORY)
    private readonly listRepository: IListRepository,
  ) {}

  async execute(): Promise<Result<IListListModel, ApiError>> {
    return this.listRepository.list();
  }
}
