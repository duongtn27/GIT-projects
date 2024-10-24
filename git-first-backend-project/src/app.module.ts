import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { Post } from './posts/entities/post.entity';
import { MajorModule } from './major/major.module';
import { ScheduleModule } from './schedule/schedule.module';
import { EventModule } from './event/event.module';
import { ProgrammeModule } from './programme/programme.module';
import { Major } from './major/entities/major.entity';
import { Event } from './event/entities/event.entity';
import { Programme } from './programme/entities/programme.entity';
import { Schedule } from './schedule/entities/schedule.entity';


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
        entities: [Post, Major, Event, Programme, Schedule],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        }
      }),
    }),
    PostsModule,
    MajorModule,
    ScheduleModule,
    EventModule,
    ProgrammeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
