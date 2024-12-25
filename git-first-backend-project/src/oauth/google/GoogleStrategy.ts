import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super({
            clientID: '752113324316-gat682fiuncepn07i93ai978l7qb4le4.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
            scope: ['profile', 'email'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        const user = await this.authService.validateUser({
            email: profile.emails[0].value,
            displayName: profile.displayName,
        });
        console.log('Validate');
        console.log(user);
        return user || null;
    }
}