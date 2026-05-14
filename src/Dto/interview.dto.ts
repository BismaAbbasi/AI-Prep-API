import {  IsNotEmpty,IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class InterviewDto {

@ApiProperty({example:'Backend Developer',description:'Enter Your  Job Title here'})
@IsNotEmpty()
@IsString()
jobTitle!: string;
@ApiProperty({example:'Expertise in Nestjs',description:'Enter your technical Background'})
@IsNotEmpty()
@IsString()
background!: string;



}