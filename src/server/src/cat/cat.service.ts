import { Injectable } from '@nestjs/common';

/**
 * @class CatService
 */
@Injectable()
export class CatService {

  public index(): object {
    return { name: 'tom' };
  }
}