import { Controller, Get } from '@nestjs/common';

@Controller()
export class HttpsController {
  @Get('/')
  getHello(): string {
    console.log('asdsad');
    return '테스트';
  }
  @Get('/test')
  test(): string {
    console.log('asdsad');
    return '테스트';
  }
}
