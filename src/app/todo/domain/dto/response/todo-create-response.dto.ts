import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { TodoDto } from '../shared/todo.dto';

export class TodoCreateApiResponseDto {
  @ApiProperty({ type: TodoDto })
  @Type(() => TodoDto)
  data: TodoDto;
}
