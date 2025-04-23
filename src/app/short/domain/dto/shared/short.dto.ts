import { ApiProperty } from '@nestjs/swagger';

export class ShortDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  id: string;

  @ApiProperty({
    example: 'https://google.com',
    required: true,
  })
  location: string;

  @ApiProperty({
    example: 100,
    required: true,
  })
  redirections: number;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    required: false,
  })
  expiresAt?: string;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    required: true,
  })
  createdAt: string;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    required: true,
  })
  updatedAt?: string;
}
