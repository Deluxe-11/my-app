import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as querystring from 'querystring';

@Injectable()
export class Crawl {
  public async handle(word: string, check = 1) {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();

    const query = {
      type: check,
      query: word,
    };

    // console.log(querystring.stringify({ query: 'bàn' }, '+'));

    await page.goto(
      `https://dict.laban.vn/find?${querystring.stringify(query)}`,
    );

    if (query.type === 1) {
      // await page.waitForSelector('.sp_us');
      await page.click('.sp_us', { clickCount: 10 });
      // await page.waitForNavigation();

      // await page.waitForSelector('audio', {
      //   visible: true,
      // });
      await page.waitForTimeout(1000);
    }

    let result = {};

    if (query.type === 1) {
      result = await page.evaluate(() => {
        const sound = document.querySelector('#sound');

        return {
          uk: sound.querySelector('source').getAttribute('src'),
          us: sound.querySelector('embed').getAttribute('src'),
          mean: Array.from(
            document
              .querySelector('.slide_content')
              .querySelectorAll('.green.bold.margin25.m-top15'),
          ).map((item) => item.textContent),
        };
      });
    } else {
      result = await page.evaluate(() => {
        return {
          mean: Array.from(
            document
              .querySelector('.slide_content')
              .querySelectorAll('.green.bold.margin25.m-top15'),
          ).map((item) => item.textContent),
        };
      });
    }
    result['word'] = word;

    await browser.close();
    return result;
  }
}
