import {  IsNotEmpty,IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class StudyDto {

@ApiProperty({example:'Backend RoadMap',description:'describe your roadmap of topic'})
@IsNotEmpty()
@IsString()
topic!: string;
@ApiProperty({example:'notes decribe',description:'Make notes summary here'})
@IsNotEmpty()
@IsString()
notes!: string;



}