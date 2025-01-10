import {
  Column,
  Entity,
  Generated,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class Marks {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @Column()
  student_id: string;

  @Column()
  teacher_id: string;

  @Column()
  score: number;

  @Column()
  exam_date: Date;
}
