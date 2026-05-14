import { Module } from '@nestjs/common';
import { StudyController } from './study.controller';
import { StudyService } from './study.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Study, StudySchema } from 'src/Schemas/study.schema';
import { AiModule } from 'src/ai/ai.module';

@Module({imports:[MongooseModule.forFeature([{name:Study.name,schema:StudySchema}]),
AiModule],
  controllers: [StudyController],
  providers: [StudyService]
})
export class StudyModule {}
