import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../board-status.enum';

export class UpdateBoardStatusDto {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  statusstr: BoardStatus;
}
