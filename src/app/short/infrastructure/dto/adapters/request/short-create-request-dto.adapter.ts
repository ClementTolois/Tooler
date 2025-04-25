import { ShortCreateBodyRequestDto } from 'src/app/short/domain/dto/request/short-create-request.dto';
import { IShortToCreateModel } from 'src/app/short/domain/model/short-to-create.model';
import { IUserModel } from 'src/app/user/domain/model/shared/user.model';
import { normalizeUrl } from 'src/utils/helpers/url.helper';

export class ShortCreateRequestDtoAdapter {
  static toModel({
    body,
    user,
  }: {
    body: ShortCreateBodyRequestDto;
    user: IUserModel;
  }): IShortToCreateModel {
    return {
      location: normalizeUrl(body.data.location),
      expiresAt: body.data.expiresAt
        ? new Date(body.data.expiresAt)
        : undefined,
      user,
    };
  }
}
