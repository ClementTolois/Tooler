import { ApiProperty } from '@nestjs/swagger';
import { ListDto } from './list.dto';
import { Type } from 'class-transformer';

export class ListListDto {
  @ApiProperty({ type: Number })
  count: number;

  @ApiProperty({ type: [ListDto] })
  @Type(() => ListDto)
  records: ListDto[];
}
