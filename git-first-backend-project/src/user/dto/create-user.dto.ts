import { IsEmail, IsNotEmpty, IsUUID, IsString, IsDateString, IsInt, IsOptional, IsEnum } from 'class-validator';
import { Role, Sex } from '../entities/user.entity';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name cannot be empty.' })
    @IsString({ message: 'Name must be a string.' })
    name: string;

    @IsEnum(Sex)
    sex: Sex;

    @IsOptional()
    @IsDateString()
    dob: string;

    @IsNotEmpty({ message: 'Role cannot be empty.' })
    @IsEnum(Role)
    role: Role;

    @IsEmail({}, { message: 'Email must be a valid email address.' })
    email: string;

    @IsNotEmpty({ message: 'Password cannot be empty.' })
    password: string;

    @IsOptional()
    @IsString({ message: 'Phone must be a string.' })
    phone: string;

    @IsOptional()
    @IsInt({ message: 'Balance must be an integer.' })
    balance: number;

    @IsOptional()
    @IsString({ message: 'FPT ID must be a string.' })
    fptId: string;

    @IsOptional()
    @IsString({ message: 'UK ID must be a string.' })
    UKId: string;
}
