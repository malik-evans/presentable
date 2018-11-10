import {NestFactory} from '@nestjs/core';
import { AppModule } from './app/app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { config } from 'dotenv';
import * as Express from 'express';
import { join } from 'path';

async function bootstrap() {
  const server = Express();
  const app = await NestFactory.create(AppModule, server);
  const appDocumentOptions = new DocumentBuilder()
      .setTitle('App')
      .setBasePath('api')
      .build();
  const appDocument = SwaggerModule.createDocument(app, appDocumentOptions);

  app.setGlobalPrefix('api');
  SwaggerModule.setup('swagger.json', app, appDocument);
  config();
  app.init();

  server.use('/docs', Express.static(join(__dirname, '..', 'docs'   )));
  server.use('/book', Express.static(join(__dirname, '..', 'book'   )));
  server.use(         Express.static(join(__dirname, '..', 'browser')));

  await server.listen(<any>process.env.PORT, () => {
    console.log('listening on port 8000');
  });
}

bootstrap();
