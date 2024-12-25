import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/signin.dto';
import { AuthenticationGuard } from './authentication.guard';

@Controller('authentication')
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authenticationService.signIn(signInDto.email, signInDto.password);
    }

    @UseGuards(AuthenticationGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
