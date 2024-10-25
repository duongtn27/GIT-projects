import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { Post } from './posts/entities/post.entity';
import { NestGResourceRoomModule } from './nest-g-resource-room/nest-g-resource-room.module';
import { PaymentModule } from './payment/payment.module';
import { Payments } from './payment/entities/payment.entity';
import { Rooms } from './nest-g-resource-room/entities/nest-g-resource-room.entity';

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
        entities: [Post, Payments,  Rooms],

        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        }
      }),
    }),
    PostsModule,
    NestGResourceRoomModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
