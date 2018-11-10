import {Injectable} from '@nestjs/common';

/**
 * @class AppService
 * @description application service
 */
@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}