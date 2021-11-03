import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ username });
    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      return this.getUserPayload(user);
    }
    return null;
  }

  async login(user: User) {
    return {
      token: this.jwtService.sign(user),
      user,
    };
  }

  async register(createUserDto: CreateUserDto) {
    const hashPassword = await this.getPasswordHash(createUserDto.password);

    const newUser = await this.usersService.create({
      ...createUserDto,
      password: hashPassword,
    });
    return {
      token: this.jwtService.sign(this.getUserPayload(newUser)),
      user: this.getUserPayload(newUser),
    };
  }

  getUserPayload(user: User) {
    return {
      _id: user._id,
      username: user.username,
      roles: user.roles,
    };
  }

  async getPasswordHash(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
