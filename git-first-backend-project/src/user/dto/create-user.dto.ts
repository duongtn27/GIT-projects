import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from 'class-validator';
import { Role, Sex } from '../entities/user.entity';

export class CreateUserDto {
  @IsString({"message": "This field must be a string"})
  @IsNotEmpty({"message": "This field is required"})
  name: String;

  @IsNotEmpty({"message": "This field is required"})
  @IsEnum(Sex)
  sex: Sex;

  @IsString({"message": "This field must be a string"})
  @IsNotEmpty({"message": "This field is required"})
  dob: String;

  @IsNotEmpty({"message": "This field is required"})
  @IsEnum(Role)
  role: Role;

  @IsEmail()
  @IsString({"message": "This field must be a string"})
  @IsNotEmpty({"message": "This field is required"})
  email: String;

  @IsString({"message": "This field must be a string"})
  @IsNotEmpty({"message": "This field is required"})
  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: String;

  @IsString({"message": "This field must be a string"})
  @IsPhoneNumber('VN', { message: 'Invalid phone number' })
  phone: String;

  @IsString({"message": "This field must be a string"})
  avatar: String;
}
