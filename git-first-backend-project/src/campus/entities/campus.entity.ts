// export class Campus {}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    hotline: string;

    @Column()
    director: string;
    rooms: any;
}
