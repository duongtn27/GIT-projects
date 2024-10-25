import { Test, TestingModule } from '@nestjs/testing';
import { NestGResourceRoomController } from './nest-g-resource-room.controller';
import { NestGResourceRoomService } from './nest-g-resource-room.service';

describe('NestGResourceRoomController', () => {
  let controller: NestGResourceRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestGResourceRoomController],
      providers: [NestGResourceRoomService],
    }).compile();

    controller = module.get<NestGResourceRoomController>(NestGResourceRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
