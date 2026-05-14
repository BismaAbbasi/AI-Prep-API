import { Controller,Post,Get,Delete ,Body,Req,Param} from '@nestjs/common';
import { StudyService } from './study.service';
import { ApiTags } from '@nestjs/swagger';
import { StudyDto } from 'src/Dto/study.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';



 @ApiTags('Study')
 
@ApiBearerAuth()              
@UseGuards(AuthGuard('jwt'))
@Controller('study')
export class StudyController {

     
    constructor(private studyservice:StudyService){
    
    }
    @Post('study-generate')
    generate(@Body() dto: StudyDto, @Req() req: any) {  
    
      return this.studyservice.analyze(dto,req.user.id)
    }
    @Get('history')
    gethistory(@Req()req:any){
        return this.studyservice.getHistory(req.user.id)
    }
    @Get(':id')
    getOne(@Param('id') id: string, @Req() req: any) {
      return this.studyservice.getOne(id, req.user.id);
    }
    
    @Delete(':id')
    delete(@Param('id') id: string, @Req() req: any) {
      return this.studyservice.delete(id, req.user.id);
    }
    
}
