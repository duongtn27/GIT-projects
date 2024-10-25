import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NestGResourceRoomService } from './nest-g-resource-room.service';
import { CreateNestGResourceRoomDto } from './dto/create-nest-g-resource-room.dto';
import { UpdateNestGResourceRoomDto } from './dto/update-nest-g-resource-room.dto';

@Controller('nest-g-resource-room')
export class NestGResourceRoomController {
  constructor(private readonly nestGResourceRoomService: NestGResourceRoomService) {}

  @Post()
  create(@Body() createNestGResourceRoomDto: CreateNestGResourceRoomDto) {
    return this.nestGResourceRoomService.create(createNestGResourceRoomDto);
  }

  @Get()
  findAll() {
    return this.nestGResourceRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nestGResourceRoomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNestGResourceRoomDto: UpdateNestGResourceRoomDto) {
    return this.nestGResourceRoomService.update(+id, updateNestGResourceRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nestGResourceRoomService.remove(+id);
  }
}
