import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    ManyToMany,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Service } from '../../service/entities/service.entity';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    notificationId: string;

    @ManyToOne(() => Service, service => service.notifications)
    service: Service;

    @ManyToMany(() => User, user => user.notifications)
    users: User[];

    @Column()
    message: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column({ default: false })
    isRead: boolean;

}
