import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AiService } from 'src/ai/ai.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { InterviewDto } from 'src/Dto/interview.dto';
import { Interview } from 'src/Schemas/interview.schema';

@Injectable()
export class InterviewService {
constructor(
  @InjectModel(Interview.name) private interviewModel: Model<Interview>,
  private aiService: AiService  
) {}

async generate(dto: InterviewDto, userId: string) {

  const prompt = `
    You are an expert technical interviewer.
    Generate exactly 5 interview questions for a ${dto.jobTitle} position.
    Candidate background: ${dto.background}
    
    Return ONLY valid JSON, no extra text:
    {
      "questions": [
        {
          "question": "...",
          "modelAnswer": "...",
          "difficulty": "easy/medium/hard",
          "tip": "..."
        }
      ]
    }
  `;

 
  const aiText = await this.aiService.generateResponse(prompt);


  const cleaned = aiText.replace(/```json|```/g, '').trim();
  const aiResponse = JSON.parse(cleaned);


  const interview = await this.interviewModel.create({
    userId,
    jobTitle: dto.jobTitle,
    background: dto.background,
    aiResponse
  });

  return interview;
}
async  getHistory(userId:string){
    return await this.interviewModel.find({userId})
   
}

async getOne(id: string, userId: string) {
  return await this.interviewModel.findOne({ _id: id, userId });
}

async delete(id: string, userId: string) {
  return await this.interviewModel.findOneAndDelete({ _id: id, userId });
}


}