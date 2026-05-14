import { SetMetadata } from "@nestjs/common";

//it takes 2 arugumet key,value
export const Roles=(...roles:string[])=>SetMetadata('roles',roles)