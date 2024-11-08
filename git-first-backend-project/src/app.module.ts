import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { PaymentModule } from './payment/payment.module';
import { Payments } from './payment/entities/payment.entity';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { MarkModule } from './mark/mark.module';
import { CampusModule } from './campus/campus.module';
import { Marks } from './mark/entities/mark.entity';
import { Campus } from './campus/entities/campus.entity';
import { HistoriesModule } from './histories/histories.module';
import { History } from './histories/entities/histories.entity';
import { NotificationsModule } from './notifications/notifications.module';
import { Notification } from './notifications/entities/notifications.entity';
import { Submission } from './submission/entities/submission.entity';
import { Service } from './service/entities/service.entity';
import { ServiceModule } from './service/service.module';
import { SubmissionModule } from './submission/submission.module';
import { RoomModule } from './room/room.module';
import { Room } from './room/entities/room.entity';
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
        entities: [User, Submission, Service, History, Notification, Marks, Campus, Payments, Room, Major, Event, Programme, Schedule],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
    MarkModule,
    CampusModule,
    PaymentModule,
    DatabaseModule,
    UserModule,
    ServiceModule,
    SubmissionModule,
    HistoriesModule,
    NotificationsModule,
    RoomModule,
    MajorModule,
    ScheduleModule,
    EventModule,
    ProgrammeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
