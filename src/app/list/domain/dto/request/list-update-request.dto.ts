import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsUUID, ValidateNested } from 'class-validator';
import { IsString } from 'class-validator';

export class ListUpdateBodyDataRequestDto {
  @ApiProperty({ example: 'My list name' })
  @IsString()
  @IsDefined()
  name: string;
}

export class ListUpdateBodyRequestDto {
  @ApiProperty({ type: ListUpdateBodyDataRequestDto })
  @ValidateNested()
  @IsDefined()
  @Type(() => ListUpdateBodyDataRequestDto)
  data: ListUpdateBodyDataRequestDto;
}

export class ListUpdatePathParamsDto {
  @ApiProperty({ example: '11787b18-f9d8-4f4b-8875-39c3f7f322e5' })
  @IsUUID()
  @IsDefined()
  listId: string;
}
