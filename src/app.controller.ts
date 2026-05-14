import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AiService } from './ai/ai.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private  readonly aiservice:AiService
  ) {}

  @Get('testAi')
  testAi(){
    return this.aiservice.generateResponse('Say hello in three diffrent languages');
  }
}
