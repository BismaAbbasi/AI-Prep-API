import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from './ai/ai.module';
import { InterviewModule } from './interview-temp/interview.module';
import { AuthModule } from './auth/auth.module';
import { StudyModule } from './Study-temp/study.module';

@Module({
  imports: [ ConfigModule.forRoot({
      isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    
    AiModule,
    
    InterviewModule,
    
    AuthModule,
    
    StudyModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
