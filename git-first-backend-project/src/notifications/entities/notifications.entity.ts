import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Generated,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Notification {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: String;

  @Column()
  serviceId: string;

  @Column()
  message: string;

  @CreateDateColumn()
  createdDate: Date;

  @Column({ default: false })
  isRead: boolean;
}
