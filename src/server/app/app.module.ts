import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
      CatModule,
      ConfigModule,
      TypeOrmModule.forRoot()
    ],
})
export class AppModule {}
