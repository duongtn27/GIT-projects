import { Module } from '@nestjs/common';
import { NestGResourceRoomService } from './nest-g-resource-room.service';
import { NestGResourceRoomController } from './nest-g-resource-room.controller';

@Module({
  controllers: [NestGResourceRoomController],
  providers: [NestGResourceRoomService],
})
export class NestGResourceRoomModule {}
