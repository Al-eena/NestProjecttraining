import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('demo')
export class DemoController {

    @Get(":id")
    getIdFromUser(@Param("id", ParseIntPipe) id:string):string{
        return id;
    }
}