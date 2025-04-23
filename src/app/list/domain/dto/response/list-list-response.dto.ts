import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ListListDto } from '../shared/list-list.dto';

export class ListListApiResponseDto {
  @ApiProperty({ type: ListListDto })
  @Type(() => ListListDto)
  data: ListListDto;
}
