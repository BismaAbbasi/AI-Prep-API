import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
@ApiProperty({example:'bisma@gmail.com',description:'Enter your registered email here'})
@IsEmail()
@IsString()
@IsNotEmpty()
email!:string

@ApiProperty({example:'security123',description:'Enter your registered password here'})

@IsString()
@IsNotEmpty()
password!:string




}