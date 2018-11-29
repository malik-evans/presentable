import { Controller, Get } from '@nestjs/common';

/**
 * Document Interface
 */
interface Document {
  links: any[];
}

@Controller()
export class AppController {
  @Get()
  document(): Document {
    return <Document>{
      links: [
        {name : 'fred'}
      ]
    };
  }
}
