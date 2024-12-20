import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("schedules")
export class Schedule {
    @PrimaryColumn()
    id: String;

    @Column()
    courses_id: String;

    @Column({type: "timestamp"})
    date: Date;

    @Column()
    slot: Number;

    @Column()
    group_id: String;

    @Column()
    lecture_id: String;

    @Column()
    session_number: Number;

    @Column()
    room_id: String;

    @Column()
    booker_id: String;
    rooms: any;
}
