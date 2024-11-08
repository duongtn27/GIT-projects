import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Room } from './entities/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RoomController],
  providers: [RoomService],
  imports: [TypeOrmModule.forFeature([Room])]
})
export class RoomModule { }
