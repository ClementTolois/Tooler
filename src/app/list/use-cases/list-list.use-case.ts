import { Result } from 'neverthrow';
import { ApiError } from 'src/utils/errors/api-error';
import { IListListUseCase } from '../domain/interfaces/use-cases/list-list.use-case.interface';
import { Inject, Injectable } from '@nestjs/common';
import {
  type IListRepository,
  LIST_REPOSITORY,
} from '../domain/interfaces/repositories/list.repository.interface';
import { IListListModel } from '../domain/model/shared/list-list.model';

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
