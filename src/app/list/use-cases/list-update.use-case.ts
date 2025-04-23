import type { Result } from 'neverthrow';
import type { ApiError } from 'src/core/errors/api-error';
import type { IListUpdateUseCase } from '../domain/interfaces/use-cases/list-update.use-case.interface';
import type { IListToUpdateModel } from '../domain/model/list-to-update.model';
import type { IListModel } from '../domain/model/shared/list.model';
import { Inject, Injectable } from '@nestjs/common';
import {
  type IListRepository,
  LIST_REPOSITORY,
} from '../domain/interfaces/repositories/list.repository.interface';

@Injectable()
export class ListUpdateUseCase implements IListUpdateUseCase {
  constructor(
    @Inject(LIST_REPOSITORY)
    private readonly listRepository: IListRepository,
  ) {}

  async execute(
    model: IListToUpdateModel,
    currentDate = new Date(),
  ): Promise<Result<IListModel, ApiError>> {
    return this.listRepository.update(model, currentDate);
  }
}
