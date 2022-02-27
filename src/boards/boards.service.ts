import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  generateId(): string {
    return randomUUID();
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: this.generateId(),
      title, // this is same as title: title
      description: description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}

// You first create service -> Inject into controller -> put it in module.
