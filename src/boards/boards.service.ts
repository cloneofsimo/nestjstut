import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Board, BoardStatus } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  generateId(): string {
    return randomUUID();
  }

  createBoard(title: string, desc: string) {
    const board: Board = {
      id: this.generateId(),
      title, // this is same as title: title
      description: desc,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}

// You first create service -> Inject into controller -> put it in module.
