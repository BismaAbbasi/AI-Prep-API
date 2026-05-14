import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
constructor(private authservice:AuthService){

}
@Post('register')
register(@Body()dto:RegisterDto){
    return this.authservice.register(dto);
}

@Post('login')
login(@Body()dto:LoginDto){
    return this.authservice.login(dto);
}


}

