import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("schedules")
export class Schedule {
    @PrimaryColumn()
    id: String;

    @Column()
    courses_id: String;

    @Column()
    course_name: String;

    @Column()
    term: String;

    @Column()
    group_id: String;

    @Column()
    lecture_id: String;

    @Column("text", {array: true})
    sessions: String[];
}
