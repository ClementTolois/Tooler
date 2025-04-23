import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ShortDto } from '../shared/short.dto';

export class ShortDeleteApiResponseDto {
  @ApiProperty({ type: ShortDto })
  @Type(() => ShortDto)
  data: ShortDto;
}
