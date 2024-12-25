import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.use(
        session({
            secret: '9351e39fcd2d856c325b45b2da1a1d1deddafa1bd2d2d3895677ef6b36ad85be',
            saveUninitialized: false,
            resave: false,
            cookie: {
                maxAge: 3000000,
                httpOnly: true,
                secure: false,
            },
        }),
    );
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(3001);
}
bootstrap();
