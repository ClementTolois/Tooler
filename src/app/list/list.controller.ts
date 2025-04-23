import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  HttpException,
  Param,
} from '@nestjs/common';
import { ListListApiResponseDto } from './domain/dto/response/list-list-response.dto';
import { ListCreateApiResponseDto } from './domain/dto/response/list-create-response.dto';
import { ListUpdateApiResponseDto } from './domain/dto/response/list-update-response.dto';
import { ListDeleteApiResponseDto } from './domain/dto/response/list-delete-response.dto';
import { ListFetchApiResponseDto } from './domain/dto/response/list-fetch-response.dto';
import type { ListCreateBodyRequestDto } from './domain/dto/request/list-create-request.dto';
import type {
  ListUpdateBodyRequestDto,
  ListUpdatePathParamsDto,
} from './domain/dto/request/list-update-request.dto';
import type { ListCreateUseCase } from './use-cases/list-create.use-case';
import { ListCreateRequestDtoAdapter } from './infrastructure/dto/adapters/request/list-create-request-dto.adapter';
import { ListCreateResponseDtoAdapter } from './infrastructure/dto/adapters/response/list-create-response-dto.adapter';
import type { ListFetchPathParamsDto } from './domain/dto/request/list-fetch-request.dto';
import { ListFetchRequestDtoAdapter } from './infrastructure/dto/adapters/request/list-fetch-request-dto.adapter';
import type { ListFetchUseCase } from './use-cases/list-fetch.use-case';
import type { ListDeleteUseCase } from './use-cases/list-delete.use-case';
import type { ListListUseCase } from './use-cases/list-list.use-case';
import type { ListUpdateUseCase } from './use-cases/list-update.use-case';
import { ListFetchResponseDtoAdapter } from './infrastructure/dto/adapters/response/list-fetch-response-dto.adapter';
import { ListListResponseDtoAdapter } from './infrastructure/dto/adapters/response/list-list-response-dto.adapter';
import { ListUpdateRequestDtoAdapter } from './infrastructure/dto/adapters/request/list-update-request-dto.adapter';
import { ListUpdateResponseDtoAdapter } from './infrastructure/dto/adapters/response/list-update-response-dto.adapter';
import type { ListDeletePathParamsDto } from './domain/dto/request/list-delete-request.dto';
import { ListDeleteRequestDtoAdapter } from './infrastructure/dto/adapters/request/list-delete-request-dto.adapter';
import { ListDeleteResponseDtoAdapter } from './infrastructure/dto/adapters/response/list-delete-response-dto.adapter';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('list')
export class ListController {
  constructor(
    private readonly listCreateUseCase: ListCreateUseCase,
    private readonly listUpdateUseCase: ListUpdateUseCase,
    private readonly listFetchUseCase: ListFetchUseCase,
    private readonly listDeleteUseCase: ListDeleteUseCase,
    private readonly listListUseCase: ListListUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new list' })
  @ApiCreatedResponse({ type: ListCreateApiResponseDto })
  async createList(
    @Body() body: ListCreateBodyRequestDto,
  ): Promise<ListCreateApiResponseDto> {
    const model = ListCreateRequestDtoAdapter.toModel({ body });

    const result = await this.listCreateUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ListCreateResponseDtoAdapter.fromModel(result.value);
  }

  @Get()
  @ApiOperation({ summary: 'List all available lists' })
  @ApiOkResponse({ type: ListListApiResponseDto })
  async list(): Promise<ListListApiResponseDto> {
    const result = await this.listListUseCase.execute();

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ListListResponseDtoAdapter.fromModel(result.value);
  }

  @Get(':listId')
  @ApiOperation({ summary: 'Fetch a list by id' })
  @ApiOkResponse({ type: ListFetchApiResponseDto })
  async fetchList(
    @Param() pathParams: ListFetchPathParamsDto,
  ): Promise<ListFetchApiResponseDto> {
    const model = ListFetchRequestDtoAdapter.toModel({ pathParams });

    const result = await this.listFetchUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ListFetchResponseDtoAdapter.fromModel(result.value);
  }

  @Put(':listId')
  @ApiOperation({ summary: 'Update a list' })
  @ApiOkResponse({ type: ListUpdateApiResponseDto })
  async updateList(
    @Param() pathParams: ListUpdatePathParamsDto,
    @Body() body: ListUpdateBodyRequestDto,
  ): Promise<ListUpdateApiResponseDto> {
    const model = ListUpdateRequestDtoAdapter.toModel({ pathParams, body });

    const result = await this.listUpdateUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ListUpdateResponseDtoAdapter.fromModel(result.value);
  }

  @Delete(':listId')
  @ApiOperation({ summary: 'Delete a list' })
  @ApiOkResponse({ type: ListDeleteApiResponseDto })
  async deleteList(
    @Param() pathParams: ListDeletePathParamsDto,
  ): Promise<ListDeleteApiResponseDto> {
    const model = ListDeleteRequestDtoAdapter.toModel({ pathParams });

    const result = await this.listDeleteUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ListDeleteResponseDtoAdapter.fromModel(result.value);
  }
}
