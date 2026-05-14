import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from './dto/register.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

import { JwtService } from '@nestjs/jwt';
import { User } from './schema/user.schema';
@Injectable()
export class AuthService {
    constructor(@InjectModel ('user')private userModel:Model<User>,
private jwtService:JwtService){

    }

    async register(dto:RegisterDto){
        const existinguser=await this.userModel.findOne({email:dto.email});
        if(existinguser){
            throw new ConflictException('user already exists');
        }
    const hashedPassword=await bcrypt.hash(dto.password,10);
    const user=this.userModel.create({
        ...dto,
        password:hashedPassword
    })
    return{
        message:"Regitration successful",
        user:{
            id:(await user)._id,
            name:(await user).name,
            email:(await user).email
        }
    }
}
async login(dto:LoginDto){
    const user=await this.userModel.findOne({email:dto.email})
    if(!user){
        throw new UnauthorizedException('email or password is Invalid');
    
    }
    const comparepass=await bcrypt.compare(dto.password,user.password)
    if(!comparepass){
    throw new UnauthorizedException("Invalid email or password")
    }
    const token=this.jwtService.sign({id:user._id,
        role:user.role
    });


       return{
        message:"login successful",
        token,
        user:{
            id:(await user)._id,
            name:(await user).name,
            email:user.email
        }
    }
}

}    