import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    // create(createUserDto: CreateUserDto) {
    //     return 'This action adds a new user';
    // }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }

    //For the purpose of implementing User Authentication
    async create(userData: CreateUserDto) {
        const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.save(newUser);
        return newUser;
    }

    async getByEmail(email: string) {
        const user = await this.usersRepository.findOneBy({ email });
        if (user) {
            return user;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }
}
