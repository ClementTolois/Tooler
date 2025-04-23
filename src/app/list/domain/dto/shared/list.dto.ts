import { ApiProperty } from '@nestjs/swagger';

export class ListDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  id: string;

  @ApiProperty({ example: 'My list name', required: true })
  name: string;

  @ApiProperty({ example: '2021-01-01T00:00:00.000Z', required: true })
  createdAt: string;

  @ApiProperty({ example: '2021-01-01T00:00:00.000Z', required: false })
  updatedAt?: string;
}
