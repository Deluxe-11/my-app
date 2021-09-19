import { Inject, Injectable } from '@nestjs/common';
import { Crawl } from '../../crawl';

@Injectable()
export class TranslateService {
  constructor(@Inject('CRAWL') private crawl: Crawl) {}

  public async handle(word: string, type = 1) {
    return this.crawl.handle(word, type);
  }
}
