import {Controller, Get} from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiResponse } from '@nestjs/swagger';
import { Cat } from './cat.entity';
import { getMongoManager, getMongoRepository } from 'typeorm';

@Controller('cats')
export class CatController {

  constructor(private catService: CatService) {}

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

  @ApiResponse({
    type: Cat,
    status: 200
  })
  @Get('create')
  async cat(): Promise<Cat>{
    return new Promise<Cat>((resolve) => {
      const cat: Cat = <Cat>Object.assign(new Cat(), <Cat>{
        name: 'tom'
      });

      resolve(cat);
    });
  }
 }
