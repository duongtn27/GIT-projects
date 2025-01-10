import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Sex, Role } from '../entities/user.entity';

export class UpdateUserDto {
  @IsString({ message: 'This field must be a string' })
  @IsOptional()
  name: String;

  @IsOptional()
  @IsEnum(Sex)
  sex: Sex;

  @IsOptional()
  @IsString({ message: 'This field must be a string' })
  dob: String;

  @IsOptional()
  @IsEmail()
  @IsString({ message: 'This field must be a string' })
  email: String;

  @IsOptional()
  @IsString({ message: 'This field must be a string' })
  @IsPhoneNumber('VN', { message: 'Invalid phone number' })
  phone: String;

  @IsOptional()
  @IsString({ message: 'This field must be a string' })
  avatar: String;
}
