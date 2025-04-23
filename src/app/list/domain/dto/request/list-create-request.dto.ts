import { IsString, ValidateNested, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ListCreateBodyDataRequestDto {
  @ApiProperty({ example: 'My list name' })
  @IsString()
  @IsDefined()
  name: string;
}

export class ListCreateBodyRequestDto {
  @ApiProperty({ type: ListCreateBodyDataRequestDto })
  @ValidateNested()
  @IsDefined()
  @Type(() => ListCreateBodyDataRequestDto)
  data: ListCreateBodyDataRequestDto;
}
