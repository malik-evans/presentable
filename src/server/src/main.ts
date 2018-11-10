import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { config } from 'dotenv';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const appDocumentOptions = new DocumentBuilder()
        .setTitle('App')
        .setBasePath('api')
        .build();
    const appDocument = SwaggerModule.createDocument(app, appDocumentOptions);
    SwaggerModule.setup('swagger.json', app, appDocument);
    app.setGlobalPrefix('api');
  config();

  await app.listen(<any>process.env.PORT, () => {
      console.log('listening on port 8000');
    });
}

bootstrap();
