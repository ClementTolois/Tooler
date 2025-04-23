import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { TodoDto } from './todo.dto';

export class TodoListDto {
  @ApiProperty({ type: Number })
  count: number;

  @ApiProperty({ type: [TodoDto] })
  @Type(() => TodoDto)
  records: TodoDto[];
}
