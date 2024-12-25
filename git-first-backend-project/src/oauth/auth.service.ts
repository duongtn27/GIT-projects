import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserDetails } from '../utils/types';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async validateUser(details: UserDetails) {
        console.log('AuthService');
        console.log(details);
        const user = await this.userRepository.findOneBy({ email: details.email });
        console.log(user);
        if (user) return user;
        console.log('User not found. Creating...');
    }

    async findUser(id: string) {
        const user = await this.userRepository.findOneBy({ id });
        return user;
    }
}