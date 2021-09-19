import { Module } from '@nestjs/common';
import { TranslateController } from './translate.controller';
import { TranslateService } from './translate.service';
import { Crawl } from '../../crawl';

@Module({
  controllers: [TranslateController],
  providers: [
    TranslateService,
    {
      provide: 'CRAWL',
      useClass: Crawl,
    },
  ],
})
export class TranslateModule {}
