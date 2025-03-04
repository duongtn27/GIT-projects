import { Module } from '@nestjs/common';
import { MajorService } from './major.service';
import { MajorController } from './major.controller';

@Module({
  controllers: [MajorController],
  providers: [MajorService],
})
export class DepartmentModule {}
