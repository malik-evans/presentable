import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from './config/config.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
      CatModule,
      ConfigModule
    ],
})
export class AppModule {
}