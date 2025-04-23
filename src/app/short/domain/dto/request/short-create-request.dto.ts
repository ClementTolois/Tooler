import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

export class ShortCreateBodyDataRequestDto {
  @ApiProperty({
    example: 'https://google.com',
    required: true,
  })
  @IsUrl()
  @IsString()
  @IsDefined()
  location: string;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  expiresAt?: string;
}

export class ShortCreateBodyRequestDto {
  @ApiProperty({ type: ShortCreateBodyDataRequestDto })
  @ValidateNested()
  @IsDefined()
  @Type(() => ShortCreateBodyDataRequestDto)
  data: ShortCreateBodyDataRequestDto;
}
