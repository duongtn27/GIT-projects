import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    notificationId: string;

    @Column()
    serviceId: string

    @Column()
    message: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column({ default: false })
    isRead: boolean;
}
