import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule ,FoodModule, ConfigModule.forRoot({
    isGlobal: true, 
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
