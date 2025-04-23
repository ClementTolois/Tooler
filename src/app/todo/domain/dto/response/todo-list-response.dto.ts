import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { TodoListDto } from '../shared/todo-list.dto';

export class TodoListApiResponseDto {
  @ApiProperty({ type: TodoListDto })
  @Type(() => TodoListDto)
  data: TodoListDto;
}
