import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { ShortCreateUseCase } from './use-cases/short-create.use-case';
import { ShortDeleteUseCase } from './use-cases/short-delete.use-case';
import { ShortFetchUseCase } from './use-cases/short-fetch.use-case';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ShortCreateApiResponseDto } from './domain/dto/response/short-create-response.dto';
import { ShortCreateBodyRequestDto } from './domain/dto/request/short-create-request.dto';
import { ShortCreateRequestDtoAdapter } from './infrastructure/dto/adapters/request/short-create-request-dto.adapter';
import { ShortCreateResponseDtoAdapter } from './infrastructure/dto/adapters/response/short-create-response-dto.adapter';
import { ShortFetchApiResponseDto } from './domain/dto/response/short-fetch-response.dto';
import { ShortFetchRequestDtoAdapter } from './infrastructure/dto/adapters/request/short-fetch-request-dto.adapter';
import { ShortFetchResponseDtoAdapter } from './infrastructure/dto/adapters/response/short-fetch-response-dto.adapter';
import { ShortFetchPathParamsDto } from './domain/dto/request/short-fetch-request.dto';
import { ShortDeletePathParamsDto } from './domain/dto/request/short-delete-request.dto';
import { ShortDeleteApiResponseDto } from './domain/dto/response/short-delete-response.dto';
import { ShortDeleteRequestDtoAdapter } from './infrastructure/dto/adapters/request/short-delete-request-dto.adapter';
import { ShortDeleteResponseDtoAdapter } from './infrastructure/dto/adapters/response/short-delete-response-dto.adapter';

@Controller('short')
export class ShortController {
  constructor(
    private readonly shortCreateUseCase: ShortCreateUseCase,
    private readonly shortFetchUseCase: ShortFetchUseCase,
    private readonly shortDeleteUseCase: ShortDeleteUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new short url' })
  @ApiCreatedResponse({ type: ShortCreateApiResponseDto })
  async createShort(
    @Body() body: ShortCreateBodyRequestDto,
  ): Promise<ShortCreateApiResponseDto> {
    const model = ShortCreateRequestDtoAdapter.toModel({ body });

    const result = await this.shortCreateUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ShortCreateResponseDtoAdapter.fromModel(result.value);
  }

  @Get(':shortId')
  @ApiOperation({ summary: 'Fetch a short url' })
  @ApiOkResponse({ type: ShortFetchApiResponseDto })
  async fetchShort(
    @Param() pathParams: ShortFetchPathParamsDto,
  ): Promise<ShortFetchApiResponseDto> {
    const model = ShortFetchRequestDtoAdapter.toModel({ pathParams });

    const result = await this.shortFetchUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ShortFetchResponseDtoAdapter.fromModel(result.value);
  }

  @Get(':shortId')
  @ApiOperation({ summary: 'Delete a short url' })
  @ApiOkResponse({ type: ShortDeleteApiResponseDto })
  async deleteShort(
    @Param() pathParams: ShortDeletePathParamsDto,
  ): Promise<ShortDeleteApiResponseDto> {
    const model = ShortDeleteRequestDtoAdapter.toModel({ pathParams });

    const result = await this.shortDeleteUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return ShortDeleteResponseDtoAdapter.fromModel(result.value);
  }
}
