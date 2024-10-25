import { PartialType } from '@nestjs/mapped-types';
import { CreateNestGResourceRoomDto } from './create-nest-g-resource-room.dto';

export class UpdateNestGResourceRoomDto extends PartialType(CreateNestGResourceRoomDto) {}
