import { Module } from '@nestjs/common';
import { InterviewController } from './interview.controller';
import { InterviewService } from './interview.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Interview, InterviewSchema } from 'src/Schemas/interview.schema';
import { AiModule } from 'src/ai/ai.module';

@Module({imports:[MongooseModule.forFeature([{name:Interview.name,schema:InterviewSchema}]),
 AiModule
],

  controllers: [InterviewController],
  providers: [InterviewService]
})
export class InterviewModule {}
