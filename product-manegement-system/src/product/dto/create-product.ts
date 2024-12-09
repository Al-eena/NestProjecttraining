import {
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
  } from '@nestjs/class-validator';
  
  export class CreateProductDto {
  
    @IsString()
    @MaxLength(15)
    @MinLength(3)
    productname: string;
  
    @IsString()
    description: string;

    @IsNumber()
    Start: number;
  
    @IsNumber()
    End: number;
    
    @IsNumber()
    duration: number;
  }