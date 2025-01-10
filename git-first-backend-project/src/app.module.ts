import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { PaymentModule } from './payment/payment.module';
import { UserModule } from './user/user.module';
import { MarkModule } from './mark/mark.module';
import { CampusModule } from './campus/campus.module';
import { HistoriesModule } from './histories/histories.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ServiceModule } from './service/service.module';
import { SubmissionModule } from './submission/submission.module';
import { RoomModule } from './room/room.module';
import { DepartmentModule } from './deparment/major.module';
import { ScheduleModule } from './schedule/schedule.module';
import { EventModule } from './event/event.module';
import { ProgrammeModule } from './programme/programme.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './oauth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationModule } from './authentication/authentication.module';


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
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
    PassportModule.register({ session: true}),
    MarkModule,
    CampusModule,
    PaymentModule,
    UserModule,
    ServiceModule,
    SubmissionModule,
    HistoriesModule,
    NotificationsModule,
    RoomModule,
    DepartmentModule,
    ScheduleModule,
    EventModule,
    ProgrammeModule,
    CourseModule,
    AuthModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
