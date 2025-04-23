import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsUUID } from 'class-validator';

export class ListDeletePathParamsDto {
  @ApiProperty({ example: '11787b18-f9d8-4f4b-8875-39c3f7f322e5' })
  @IsUUID()
  @IsDefined()
  listId: string;
}
