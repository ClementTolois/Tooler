import { IsString, IsDefined, ValidateNested, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class TodoCreateBodyDataRequestDto {
  @ApiProperty({ example: 'My todo description' })
  @IsString()
  @IsDefined()
  description: string;
}

export class TodoCreateBodyRequestDto {
  @ApiProperty({ type: TodoCreateBodyDataRequestDto })
  @ValidateNested()
  @Type(() => TodoCreateBodyDataRequestDto)
  data: TodoCreateBodyDataRequestDto;
}

export class TodoCreatePathParamsDto {
  @ApiProperty({ example: '11787b18-f9d8-4f4b-8875-39c3f7f322e5' })
  @IsUUID()
  @IsDefined()
  listId: string;
}
