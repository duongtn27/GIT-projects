import { Controller, Get, HttpStatus, Req, UseGuards } from "@nestjs/common";
import { GoogleAuthGuard } from "./google/Guards";
import { Request } from "express";

@Controller('auth')
export class AuthController {
    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return { 'msg': 'Google Authentication' };
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect() {
        return { 'msg': 'Authorized' , "Status code": HttpStatus.ACCEPTED};
    }

    @Get('status')
    user(@Req() request: Request & { user?: any }) {
        console.log(request.user);
        if (request.user) {
            return { 'msg': 'User is authenticated' };
        } else {
            return { 'msg': 'User is not authenticated' };
        }
    }
}