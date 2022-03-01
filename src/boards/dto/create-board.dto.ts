import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  @IsString()
  description: string;
}
