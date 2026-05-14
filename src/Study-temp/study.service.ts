import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AiService } from 'src/ai/ai.service';
import { StudyDto } from 'src/Dto/study.dto';
import { Study } from 'src/Schemas/study.schema';

@Injectable()
export class StudyService {

   
    constructor(
      @InjectModel(Study.name) private studyModel: Model<Study>,
      private aiService: AiService
    ) {}
    
    async analyze(dto: StudyDto, userId: string) {
    
     const prompt = `
  You are an expert study assistant.
  Topic: ${dto.topic}
  Student notes: ${dto.notes}
  
  Return ONLY valid JSON, no extra text:
  {
    "summary": "...",
    "mcqs": [
      {
        "question": "...",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": "...",
        "explanation": "..."
      }
    ],
    "flashcards": [
      {
        "front": "...",
        "back": "..."
      }
    ],
    "predictedExamQuestions": ["...", "..."]
  }
`;
    
     
      const aiText = await this.aiService.generateResponse(prompt);
    
    
      const cleaned = aiText.replace(/```json|```/g, '').trim();
      const aiResponse = JSON.parse(cleaned);
    
    
      const study = await this.studyModel.create({
        userId,
     topic   : dto.topic,
        notes: dto.notes,
        aiResponse
      });
    
      return study;
    }
    async  getHistory(userId:string){
        return await this.studyModel.find({userId})
       
    }
    
    async getOne(id: string, userId: string) {
      return await this.studyModel.findOne({ _id: id, userId });
    }
    
    async delete(id: string, userId: string) {
      return await this.studyModel.findOneAndDelete({ _id: id, userId });
    }
    
    
    }

