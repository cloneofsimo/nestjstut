import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

import { BoardStatus } from '../board.model';

// Status should only be PUBLIC or PRIVATE
// Let's see if thats the case.
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    value = value.toUpperCase();

    const index = this.StatusOptions.indexOf(value);
    if (index < 0) {
      throw new BadRequestException(`${value} is not a valid status`);
    }

    return value;
  }
}
