import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notifications.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
    constructor(
        @InjectRepository(Notification)
        private readonly notificationRepository: Repository<Notification>,
    ) { }

    async create(createNotificationDto: CreateNotificationDto) {
        const notification = this.notificationRepository.create(createNotificationDto);
        return this.notificationRepository.save(notification);
    }

    async findAll(): Promise<Notification[]> {
        return this.notificationRepository.find();
    }

    async findOne(id: string): Promise<Notification> {
        return this.notificationRepository.findOneBy({ id: id });
    }

    async remove(id: string) {
        return this.notificationRepository.delete(id);
    }
}
