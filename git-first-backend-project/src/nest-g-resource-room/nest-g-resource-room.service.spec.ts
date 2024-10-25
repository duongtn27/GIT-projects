import { Test, TestingModule } from '@nestjs/testing';
import { NestGResourceRoomService } from './nest-g-resource-room.service';

describe('NestGResourceRoomService', () => {
  let service: NestGResourceRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestGResourceRoomService],
    }).compile();

    service = module.get<NestGResourceRoomService>(NestGResourceRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
