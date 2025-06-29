import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("no")
  getHellon(): string {
    return this.appService.getHellon();
  }
  @Get("am")
  getHelloa(): string {
    return this.appService.getHelloa();
  }
  @Get("fa")
  getHellof(): string {
    return this.appService.getHellof();
  }
  @Get("wa")
  getHellow(): string {
    return this.appService.getHellow();
  } 
  
  @Get("wafaa")
  getHellowafaa(): string {
    return this.appService.getHellowafaa();
  }
}
