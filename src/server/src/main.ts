import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {join} from 'path';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const appDocumentOptions = new DocumentBuilder()
        .setTitle('App')
        .setBasePath('api')
        .build();
    const appDocument = SwaggerModule.createDocument(app, appDocumentOptions);
    SwaggerModule.setup('swagger.json', app, appDocument);
    app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '../../client/dist/'));

    await app.listen(8000, () => {
      console.log('listening on port 8000');
    });
}

bootstrap();
