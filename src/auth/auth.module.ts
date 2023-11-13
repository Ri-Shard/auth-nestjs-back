import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";
import { LocalStrategy } from "./local.auth";
import { UserSchema } from "src/users/users.model";



@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'CAMILACHARRYDESGINER!@#$@!',
    signOptions: { expiresIn: '60s' },
  }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  providers: [AuthService, UsersService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule { }