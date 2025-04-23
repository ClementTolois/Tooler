import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  id: string;

  @ApiProperty({ example: 'My todo description', required: true })
  description: string;

  @ApiProperty({ example: false, required: true })
  completed: boolean;

  @ApiProperty({ example: '2021-01-01T00:00:00.000Z', required: false })
  completedAt?: string;

  @ApiProperty({ example: '2021-01-01T00:00:00.000Z', required: true })
  createdAt: string;

  @ApiProperty({ example: '2021-01-01T00:00:00.000Z', required: false })
  updatedAt?: string;
}
