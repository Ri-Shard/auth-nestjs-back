import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string,
        @Body('apellido') apellido: string,
        @Body('direccion') direccion: string,
        @Body('ciudad') ciudad: string,
        @Body('nombre') nombre: string,
        @Body('rol') rol: string,


    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.usersService.createUser(
            username,
            hashedPassword,
            apellido,
            direccion,
            ciudad,
            nombre,
            rol,
        );
        return result;
    }
}