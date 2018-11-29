import {Module} from '@nestjs/common';
import {CatController} from './cat.controller';
import { CatService } from './cat.service';

/**
 * @class CatModule
 * @author Malik Evans
 * @name CatModule
 */
@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {
}
