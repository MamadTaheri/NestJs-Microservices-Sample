import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Nest_MainDB', {
      autoCreate: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
