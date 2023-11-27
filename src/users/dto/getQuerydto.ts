import { IsOptional } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class GetQueryDto {
    
    @IsOptional()
    correo: string;

    @IsOptional()
    password: string;
  
    @IsOptional()
    apellido: string;
  
    @IsOptional()
    direccion: string;
  
    @IsOptional()
    ciudad: string;
  
    @IsOptional()
    nombre: string;
  
    @IsOptional()
    rol: string;
}