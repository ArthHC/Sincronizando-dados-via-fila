import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    log('Hello, World!');
    log('This is a simple NestJS application.');
    return this.appService.getHello();
  }
}
