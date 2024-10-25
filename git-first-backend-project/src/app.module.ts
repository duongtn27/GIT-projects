import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { Post } from './posts/entities/post.entity';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { HistoriesModule } from './histories/histories.module';
import { History } from './histories/entities/histories.entity';
import { NotificationsModule } from './notifications/notifications.module';
import { Notification } from './notifications/entities/notifications.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DATABASE_HOST'),
                port: configService.get<number>('DATABASE_PORT'),
                username: configService.get<string>('DATABASE_USER'),
                password: configService.get<string>('DATABASE_PASSWORD'),
                database: configService.get<string>('DATABASE_NAME'),
                entities: [History, Notification],
                synchronize: true,
                ssl: {
                    rejectUnauthorized: false,
                }
            }),
        }),
        PostsModule,
        DatabaseModule,
        UserModule,
        HistoriesModule,
        NotificationsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
