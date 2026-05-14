import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import * as bcrypt from 'bcrypt';
import { User } from "./schema/user.schema";




@Injectable()
export class Adminseeds implements OnModuleInit{
    constructor(@InjectModel('user')private userModel:Model<User>){}
    async onModuleInit() {
        const existAdmin=await this.userModel.findOne({role:'admin'})

        if(!existAdmin){
            const hashedpassword= await bcrypt.hash('admin123',10);
            await this.userModel.create({
             name: 'Admin',
        email: 'admin@gmail.com',
        password: hashedpassword,
        role: 'admin'
            });
            console.log('Admin user created successfully')
        }else console.log("Admin already exists")
    }

}