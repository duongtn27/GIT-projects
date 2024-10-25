import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rooms {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    status:  string;//Room available or not

    @Column()
    room_name: string;

    @Column()
    campus_id:string;

    

}
