import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {join} from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useStaticAssets(join(__dirname, '../../client/dist/client'));
    await app.listen(8000, () => {
        console.log('listening on port 3000');
    });
}

bootstrap();
