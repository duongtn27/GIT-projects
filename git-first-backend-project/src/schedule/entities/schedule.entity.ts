import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity("schedules")
export class Schedule {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string;

    @Column()
    courses_id: string;

    @Column({type: "timestamp"})
    date: Date;

    @Column()
    slot: Number;

    @Column()
    group_id: string;

    @Column()
    lecture_id: string;

    @Column()
    session_number: Number;

    @Column()
    room_id: string;

    @Column()
    booker_id: string;
    rooms: any;
}
