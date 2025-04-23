import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDefined } from 'class-validator';

export class TodoDeletePathParamsDto {
  @ApiProperty({ example: '11787b18-f9d8-4f4b-8875-39c3f7f322e5' })
  @IsUUID()
  @IsDefined()
  listId: string;

  @ApiProperty({ example: '11787b18-f9d8-4f4b-8875-39c3f7f322e5' })
  @IsUUID()
  @IsDefined()
  todoId: string;
}
