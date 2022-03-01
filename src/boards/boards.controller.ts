import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status.dto';
import { BoardStatusValidationPipe } from './pipes/borad-status-validation.pipes';

@Controller('boards')
@ApiTags('Boards CRUD API')
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
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Create a new Board, returns the created board' })
  @ApiCreatedResponse({
    description: 'The Board has been successfully created.',
  })
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  /*
  Using Param for setting parameter in get method
  */

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void {
    this.boardsService.deleteBoardById(id);
  }
  // use swagger request body

  @Patch('/:id/status')
  @ApiBody({ type: UpdateBoardStatusDto })
  updateBoardStatus(
    @Body('statusstr', BoardStatusValidationPipe)
    statusstr: string,
    @Param('id') id: string,
  ): Board {
    return this.boardsService.updateBoardStatus(id, BoardStatus[statusstr]);
  }
}
