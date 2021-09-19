import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslateModule } from './modules/translate/translate.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TranslateModule],
})
export class AppModule {}
