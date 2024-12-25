import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google/GoogleStrategy';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { SessionSerializer } from './google/Serializer';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [
        GoogleStrategy,
        SessionSerializer,
        {
            provide: 'AUTH_SERVICE',
            useClass: AuthService,
        },
    ],
})
export class AuthModule { }
