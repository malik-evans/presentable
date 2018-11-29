**Presentable**

**All roads lead to compodoc**
[Compodoc](https://github.com/compodoc/compodoc)  is the single source of truth for developers, designers, artchitechs and alike whereas developing in a node environment.

Inversion of control is becoming the norm as the base for source code architecture. Developers with an obligation to produce object oriented software may find their workflow mutating toward already well-tested conventions.    

Your modernizing your development workflow if

 - Object Oriented Programming by default
 - Migrate from class factories to decorator factories
 - Natural attraction to decorators
 - Source/Client/Project documentation should be synchronized with latest release
 - All contributors via designer, dev or data scientist have working knowledge of version control
 - Differing concerns produce the need for different local development end-points


**Features of Presentable**

 - Swagger  - Api Documentation
 - Nestjs - Server-side Ioc framework, core api nearly identical to Angular
 - Angular - Client-side development platform 
 - Typeorm - Typescript based Object Relational Mapper
 - Compodoc - Angular & Nestjs documentation generator

**Beloved Annotations**
The packages listed above, with the specification of [@nestjs/swagger](https://github.com/nestjs/swagger), are all annotation based libraries and that's the point.

**Decorator based libraries**

 - [@nestjs ](https://nestjs.com/)
 - [@nestjs/swagger ](https://github.com/nestjs/swagger)
 - [@angular ](https://github.com/angular/angular)
 - [Typerom](https://github.com/typeorm/typeorm)
 - [@ngxs](https://github.com/ngxs/store)

**Getting Started**
Fork this repo, then on your machine...

Create a `.env` file in the project root. In accordance to the  already existing `.env.example` file, supply a `PORT` field.

Like so 

    PORT=8000
If you set the port to a value other than 8000, make sure to change `browser-sync.js` and `proxy.conf.json` accordingly.
__

    npm install
    npm run serve:dev

**Possible Ports in use**
| Port  | Module | Config |
|-------|-----------| -------- |
|  5000 | browser-sync |  browser-sync.js  |
|  8000 | nodemon  |  nodemon.json | 
|  8080 | compodoc  |  .compodoc.json |
|  4000 | gitbook  | none | 

**Development Endpoints**

 - `localhost:8000` - Server static files via angular application build output
 - `localhost:8000/swagger.json` -  Swagger-ui endpoint
 - `localhost:5000` - browsync-synced client application
 - `localhost:8000/api` - Server application api endpoint
 - `localhost:5000` -  client application
 - `localhost:4000` - Gitbook
 -  `localhost:8000/book` - Gitbook embedded in compodoc
 - `localhost:8080` - Compodoc
 - `localhost:8000/docs` -    Source code documentation (Angular/Nestjs) decorators

The [`serve:dev`](https://github.com/malik-evans/presentable/blob/308cfdc8117767532b592ed9e31bc7e900e4454b/package.json#L20) script will [`concurrently`](https://github.com/kimmobrunfeldt/concurrently) run three scripts.

**`npm run serve:dev`**
Starts both the angular and server-side typescript project in watch mode. Runs browser-sync on port 5000 on a [`proxy`](https://github.com/malik-evans/presentable/blob/develop/proxy.conf.json) to port 8000 via the server endpoint.

**`npm run serve:source:docs`**
Starts [Compodoc](https://compodoc.app/) server on port 8080

**`npm run serve:book:docs`**
Starts [Gitbook](https://www.gitbook.com/?t=1) server on port 4000

