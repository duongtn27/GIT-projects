import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    notificationId: number;

    @Column()
    serviceId: string

    @Column()
    message: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column({ default: false })
    isRead: boolean;
}
