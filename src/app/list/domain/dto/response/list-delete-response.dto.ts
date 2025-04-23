import { Type } from 'class-transformer';
import { ListDto } from '../shared/list.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ListDeleteApiResponseDto {
  @ApiProperty({ type: ListDto })
  @Type(() => ListDto)
  data: ListDto;
}
