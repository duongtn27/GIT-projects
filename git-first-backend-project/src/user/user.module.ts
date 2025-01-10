import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Employee } from './entities/employee.entity';
import { Lecture } from './entities/lecture.entity';
import { Security } from './entities/security.entity';
import { Student } from './entities/student.entity';
import { Admin } from './entities/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Employee, Lecture, Security, Student, Admin])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
