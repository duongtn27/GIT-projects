import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role, User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { Lecture } from './entities/lecture.entity';
import { Security } from './entities/security.entity';
import { Student } from './entities/student.entity';
import { Admin } from './entities/admin.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>,
    @InjectRepository(Security)
    private readonly securityRepository: Repository<Security>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | Admin | Lecture | Student | Security | Employee> {
    try {
      const newUser = this.userRepository.create(createUserDto);
      await this.userRepository.save(newUser);

      switch (newUser.role) {
        case Role.ADMIN:
          return await this.adminRepository.save({ account: newUser });
        case Role.LECTURER:
          return await this.lectureRepository.save({ account: newUser });
        case Role.SECURITY:
          return await this.securityRepository.save({ account: newUser });
        case Role.STUDENT:
          return await this.studentRepository.save({ account: newUser });
        case Role.EMPLOYEE:
          return await this.employeeRepository.save({ account: newUser });
        default:
          throw new HttpException('Invalid role', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(offset: number): Promise<User[]> {
    try {
      let limit = 10;
      if (offset < 0) {
        throw new HttpException(
          'Offset must be positive',
          HttpStatus.BAD_REQUEST,
        );
      }
      const data = await this.userRepository.find({
        take: limit,
        skip: offset,
      });
      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.update(id, updateUserDto);

    return {
      message: 'User updated successfully',
      user: user.id,
    };
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
}
