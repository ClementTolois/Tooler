import {
  IsString,
  ValidateNested,
  IsObject,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class TodoUpdateBodyDataRequestDto {
  @ApiProperty({ example: 'My todo description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}

export class TodoUpdateBodyRequestDto {
  @ApiProperty({ type: TodoUpdateBodyDataRequestDto })
  @ValidateNested()
  @IsDefined()
  @Type(() => TodoUpdateBodyDataRequestDto)
  data: TodoUpdateBodyDataRequestDto;

  @IsObject()
  metadata: Record<string, unknown>;
}

export class TodoUpdatePathParamsDto {
  @ApiProperty({ example: '11787b18-f9d8-4f4b-8875-39c3f7f322e5' })
  @IsUUID()
  @IsDefined()
  listId: string;

  @ApiProperty({ example: '11787b18-f9d8-4f4b-8875-39c3f7f322e5' })
  @IsUUID()
  @IsDefined()
  todoId: string;
}
