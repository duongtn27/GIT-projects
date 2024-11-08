import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Marks {
    @PrimaryGeneratedColumn()
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
