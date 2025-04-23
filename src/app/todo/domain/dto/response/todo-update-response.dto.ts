import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { TodoDto } from '../shared/todo.dto';

export class TodoUpdateApiResponseDto {
  @ApiProperty({ type: TodoDto })
  @Type(() => TodoDto)
  data: TodoDto;
}
