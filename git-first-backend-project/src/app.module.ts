import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
// import { Posts } from './posts/entities/post.entity';
import { MarkModule } from './mark/mark.module';
import { CampusModule } from './campus/campus.module';
import { Marks } from './mark/entities/mark.entity';
import { Campus } from './campus/entities/campus.entity';

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
        entities: [Marks, Campus],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        }
      }),
    }),
    MarkModule,
    CampusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
