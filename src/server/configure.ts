import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

const configureSwaggerDocument = (app) =>
    SwaggerModule.createDocument(app, new DocumentBuilder()
        .setTitle('Presentable')
        .setDescription('PresentableApi')
        .setVersion('1.0')
        .build());

export {
    configureSwaggerDocument
}