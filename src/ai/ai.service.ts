import Groq from 'groq-sdk';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  private client;

  constructor() {
    this.client = new Groq({
      apiKey: process.env.GROQ_API_KEY!
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0].message.content!;
  }
}