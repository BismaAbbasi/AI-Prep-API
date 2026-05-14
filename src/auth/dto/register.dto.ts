import { IsString,IsEmail, IsNotEmpty,  } from "class-validator";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

export class RegisterDto{
@ApiProperty({example:'Bisma Abbasi',description:'Register your name here'})
@IsString()
@IsNotEmpty()
name!:string

@ApiProperty({example:'bisma@gmail.com',description:'Register your email here'})
@IsString()
@IsNotEmpty()
@IsEmail()
email!:string

@ApiProperty({example:'security123',description:'StrongPassword here'})
@IsString()
@IsNotEmpty()


password!:string



}