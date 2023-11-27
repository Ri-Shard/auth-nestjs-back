import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(correo: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(correo, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}