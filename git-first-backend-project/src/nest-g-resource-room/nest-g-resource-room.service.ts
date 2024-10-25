import { Injectable } from '@nestjs/common';
import { CreateNestGResourceRoomDto } from './dto/create-nest-g-resource-room.dto';
import { UpdateNestGResourceRoomDto } from './dto/update-nest-g-resource-room.dto';

@Injectable()
export class NestGResourceRoomService {
  create(createNestGResourceRoomDto: CreateNestGResourceRoomDto) {
    return 'This action adds a new nestGResourceRoom';
  }

  findAll() {
    return `This action returns all nestGResourceRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nestGResourceRoom`;
  }

  update(id: number, updateNestGResourceRoomDto: UpdateNestGResourceRoomDto) {
    return `This action updates a #${id} nestGResourceRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} nestGResourceRoom`;
  }
}
