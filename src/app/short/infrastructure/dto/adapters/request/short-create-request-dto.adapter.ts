import { ShortCreateBodyRequestDto } from 'src/app/short/domain/dto/request/short-create-request.dto';
import { IShortToCreateModel } from 'src/app/short/domain/model/short-to-create.model';
import { normalizeUrl } from 'src/core/helpers/url.helper';

export class ShortCreateRequestDtoAdapter {
  static toModel({
    body,
  }: {
    body: ShortCreateBodyRequestDto;
  }): IShortToCreateModel {
    return {
      location: normalizeUrl(body.data.location),
      expiresAt: body.data.expiresAt
        ? new Date(body.data.expiresAt)
        : undefined,
    };
  }
}
