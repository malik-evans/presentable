import 'reflect-metadata';
import * as Express from 'express';
import config from '../nuxt.config';
import { Nuxt, Builder } from 'nuxt';

const app= Express();
const PORT = 8000;
const nuxt = new Nuxt(config);

app.use(nuxt.render);

function listen(app: Express.Application, port: number  = PORT) {
    app.listen(PORT, () => {
        console.log(`App listening on ${PORT}`)
    })
}

new Builder(nuxt)
    .build()
    .then( _ => listen(app));