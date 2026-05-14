import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";
@Schema()
export class Study {
  @Prop({ required: true })
  userId!: string;

  @Prop({ required: true })
  topic!: string;

  @Prop({ required: true })
  notes!: string;

  @Prop({ type: Object })
  aiResponse!: object;

  @Prop({ default: Date.now })
  createdAt!: Date;
}

export const StudySchema=SchemaFactory.createForClass(Study);