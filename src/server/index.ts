import 'reflect-metadata';
import {NestFactory} from "@nestjs/core";
import AppModule from "./app/app.module";
import {HttpServer} from "@nestjs/common";
import {configureSwaggerDocument} from './configure';
import {SwaggerModule} from '@nestjs/swagger';
import { join } from 'path';

const PORT = 8000;

function listen(app: HttpServer | any, port: number = PORT) {
    app.listen(port, () => {
        console.log(`App listening on ${PORT}`)
    })
}

async function bootstrap(module: AppModule) {
    const app = await NestFactory.create(module);
    SwaggerModule.setup('swagger', app, configureSwaggerDocument(app));
    app.setGlobalPrefix('api');
    app.useStaticAssets(join(__dirname, '..', 'client/dist/client'));
    listen(app);
}

bootstrap(AppModule);