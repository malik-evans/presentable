import {Controller, Get, Module, Param,} from "@nestjs/common";
import {ApiModelProperty, ApiImplicitParam, ApiProduces} from '@nestjs/swagger';


export class GreetingDto {

    @ApiModelProperty({
        readOnly: true,
        maximum: 24
    })
    readonly name: string;
    @ApiModelProperty({
        readOnly: true,
        maximum: 24
    })
    readonly tone: string;

    constructor(name: string) {
        this.name = name;
    }
}

@Controller('cats')
export class CatsController {
    @Get()
    root() {
        return {name: 'tom'};
    }
}

@Module({
    controllers: [CatsController],
})
export class CatsModule {
}

@ApiProduces('application/json')
@Controller()
export class AppController {
    @Get()
    root() {
        return 'hello from root'
    }

    @Get('greeting')
    @ApiImplicitParam({name: 'name', type: String, description: 'model for greeting'})
    greeting(@Param('name') name: string): GreetingDto {
        return new GreetingDto(name);
    }
}

@Module({
    controllers: [AppController],
    imports: [CatsModule]
})
export default class AppModule {
}