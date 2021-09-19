import { Controller, Get } from '@nestjs/common';
import { TranslateService } from './translate.service';

@Controller('translate')
export class TranslateController {
  constructor(private service: TranslateService) {}

  @Get('/')
  public async index() {
    return {
      name: await this.service.handle('không thể', 2),
    };
  }
}
