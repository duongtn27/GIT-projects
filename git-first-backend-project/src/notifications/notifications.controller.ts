import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }

    @Post()
    async create(@Body() CreateNotificationDto: CreateNotificationDto) {
        return this.notificationsService.create(CreateNotificationDto);
    }

    @Get()
    async findAll() {
        return this.notificationsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.notificationsService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.notificationsService.remove(id);
    }
}
