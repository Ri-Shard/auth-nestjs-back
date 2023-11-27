import { Body, Controller, Post, Get, Param, Query,HttpStatus,Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';
import { GetQueryDto } from './dto/getQuerydto';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('correo') correo: string,
        @Body('apellido') apellido: string,
        @Body('direccion') direccion: string,
        @Body('ciudad') ciudad: string,
        @Body('nombre') nombre: string,
        @Body('rol') rol: string,


    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.usersService.createUser(
            correo,
            hashedPassword,
            apellido,
            direccion,
            ciudad,
            nombre,
            rol,
        );
        return result;
    }

    @Get('/getUsers')
    async getAllUsers(@Query() getQueryDto: GetQueryDto, @Res() res: any) {
        const storages: any = await this.usersService.getUsers(getQueryDto);
        return res.status(HttpStatus.OK).send(storages);
    }
}