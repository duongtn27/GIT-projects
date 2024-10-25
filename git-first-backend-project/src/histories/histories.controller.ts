import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('histories')
export class HistoriesController {
    constructor(private readonly historiesService: HistoriesService) { }

    @Post()
    async create(@Body() createHistoryDto: CreateHistoryDto) {
        return this.historiesService.create(createHistoryDto);
    }

    @Get()
    async findAll() {
        return this.historiesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.historiesService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.historiesService.remove(id);
    }

}
