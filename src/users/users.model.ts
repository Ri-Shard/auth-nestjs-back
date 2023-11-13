import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  apellido: string;

  @Prop()
  direccion: string;

  @Prop()
  ciudad: string;

  @Prop()
  nombre: string;

  @Prop()
  rol: string;
}

export const UserSchema = SchemaFactory.createForClass(User);