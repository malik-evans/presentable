import {Controller, Get} from "@nestjs/common";

@Controller('cats')
export class CatController {
    @Get()
    root() {
        return {name: 'cats'}
    }
}