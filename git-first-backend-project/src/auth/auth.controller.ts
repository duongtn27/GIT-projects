import {
    Body,
    Req,
    Controller,
    HttpCode,
    Post,
    UseGuards,
    Get,
    ClassSerializerInterceptor,
    UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import { UserService } from '../user/user.service';
import LogInDto from './dto/logIn.dto';

@Controller('auth')
export class AuthController {
    // constructor(
    //     private readonly authenticationService: AuthService,
    //     private readonly usersService: UserService,
    // ) { }

    @Post('register')
    async register(data: string) {
        return("This is a test string: " + data);
    }

}