import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  Param,
  Res,
} from '@nestjs/common';
import { ShortIncrementUseCase } from './use-cases/short-increment.use-case';
import { Response } from 'express';
import { ShortFetchPathParamsDto } from './domain/dto/request/short-fetch-request.dto';
import { ShortFetchRequestDtoAdapter } from './infrastructure/dto/adapters/request/short-fetch-request-dto.adapter';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@Controller('s')
export class SController {
  constructor(private readonly shortIncrementUseCase: ShortIncrementUseCase) {}

  @Get(':shortId')
  @HttpCode(302)
  @ApiOperation({ summary: 'Redirect to the original URL' })
  @ApiOkResponse({ description: 'Redirects to the original URL' })
  @ApiNotFoundResponse({ description: 'Short URL not found' })
  async redirectShort(
    @Param() pathParams: ShortFetchPathParamsDto,
    @Res() res: Response,
  ) {
    const model = ShortFetchRequestDtoAdapter.toModel({ pathParams });

    const result = await this.shortIncrementUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return res.redirect(`https://${result.value.location}`);
  }
}
