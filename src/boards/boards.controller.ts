import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  /*
    In express js, they would have it like this:
    app.post('/'), (req, res) => {
        console.log(req.body);
    }

    In nestjs, they would have it like this:
    @Post('/')
    createBoard(@Body() body: CreateBoardDto): Board {

    */

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}
