import {Controller, Get} from "@nestjs/common";
import { CatService } from './cat.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('cats')
export class CatController {

  constructor(private catService: CatService) {
  }

  /**
   * @description cats index response
   */
  @ApiResponse({
    status: 200,
  })
  @Get()
  root(): object {
    return { name: 'cats' };
  }
}