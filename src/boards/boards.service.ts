import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { BoardStatus } from './board-status.enum';
import { BoardRepository } from './board.repository';
import { Board } from './boards.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.boardRepository.save(board);
    return board;
  }
}

// You first create service -> Inject into controller -> put it in module.
