import 'reflect-metadata';
import {Builder} from 'nuxt';
import {NestFactory} from "@nestjs/core";
import AppModule from "./app/app.module";
import {HttpServer} from "@nestjs/common";
import {configureSwaggerDocument} from './configure';
import {SwaggerModule} from '@nestjs/swagger';
import nuxtApp from './nuxt-config';

const PORT = 8000;

function listen(app: HttpServer | any, port: number = PORT) {
    app.listen(port, () => {
        console.log(`App listening on ${PORT}`)
    })
}

async function bootstrap(module: AppModule) {
    const nestApp = await NestFactory.create(module);
    SwaggerModule.setup('swagger', nestApp, configureSwaggerDocument(nestApp));
    nestApp.setGlobalPrefix('api');
    nestApp.use(nuxtApp.render);

    new Builder(nuxtApp)
        .build()
        .then(_ => listen(nestApp));
}

bootstrap(AppModule);