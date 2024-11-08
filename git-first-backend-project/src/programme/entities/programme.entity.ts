import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("programmes")
export class Programme {
    @PrimaryColumn()
    id: String;

    @Column()
    name: String;

    @Column()
    description: String;
}
