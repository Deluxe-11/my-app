import { Controller, Get, Query } from '@nestjs/common';
import { TranslateService } from './translate.service';

@Controller('translate')
export class TranslateController {
  constructor(private service: TranslateService) {}

  @Get('/')
  public async index(@Query('word') word: string) {
    return {
      data: await this.service.handle(word, 1),
    };
  }
}
