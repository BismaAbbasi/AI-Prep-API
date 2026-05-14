import { Controller, Post,Body,Req, Get, Param,Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InterviewService } from './interview.service';
import { InterviewDto } from 'src/Dto/interview.dto';
import { AuthGuard } from '@nestjs/passport';

 @ApiTags('Interview')
 
@ApiBearerAuth()              
@UseGuards(AuthGuard('jwt'))
@Controller('interview')
export class InterviewController {
constructor(private interviewService:InterviewService){

}
@Post('generate')
generate(@Body() dto: InterviewDto, @Req() req: any) {

  return this.interviewService.generate(dto,req.user.id)
}
@Get('history')
gethistory(@Req()req:any){
    return this.interviewService.getHistory(req.user.id)
}
@Get(':id')
getOne(@Param('id') id: string, @Req() req: any) {
  return this.interviewService.getOne(id, req.user.id);
}

@Delete(':id')
delete(@Param('id') id: string, @Req() req: any) {
  return this.interviewService.delete(id, req.user.id);
}









}
