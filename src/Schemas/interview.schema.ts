import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";


@Schema()
export class Interview {
  @Prop({ required: true })
  userId!: string;

  @Prop({ required: true })
  jobTitle!: string;

  @Prop({ required: true })
  background!: string;

  @Prop({ type: Object })
  aiResponse!: object;

  @Prop({ default: Date.now })
  createdAt!: Date;
}
export const InterviewSchema=  SchemaFactory.createForClass(Interview);