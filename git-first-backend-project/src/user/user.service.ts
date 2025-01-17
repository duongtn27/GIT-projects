import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async updateHashedRefreshToken(userId: String, hashedRefreshToken: string) {
    return await this.userRepository.update({ id: userId }, { hashedRefreshToken });
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: String): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }

  update(id: String, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: String) {
    return `This action removes a #${id} user`;
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email: email } });
  }
}
