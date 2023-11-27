import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }
    async createUser(correo: string, password: string,apellido: string,direccion: string,ciudad:string,nombre: string,rol: string): Promise<User> {
        return this.userModel.create({
            correo,
            password,
            apellido,
            direccion,
            ciudad,
            nombre,
            rol,
        });
    }
    async getUser(query: object ): Promise<User> {
        return this.userModel.findOne(query);
    }
    async getUsers(query: object) {
        return await this.userModel.find().exec();

    }
}