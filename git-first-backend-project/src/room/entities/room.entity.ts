import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity("rooms")
export class Room {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    status: string;

    @Column()
    room_name: string;

    @Column({ nullable: true })
    campus_id: string;
}