import { Controller, Get } from '@nestjs/common';

@Controller()
export class HttpsController {
  @Get('/')
  getHello(): string {
    return '테스트';
  }
}
