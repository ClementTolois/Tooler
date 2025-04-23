import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class ShortFetchPathParamsDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsDefined()
  shortId: string;
}
