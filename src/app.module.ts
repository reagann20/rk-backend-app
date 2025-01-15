import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule ,FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
