import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';

@EntityRepository(Board) // this class controls Board
export class BoardRepository extends Repository<Board> {}
