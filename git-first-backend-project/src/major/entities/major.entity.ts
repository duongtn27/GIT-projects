import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Programme } from "../../programme/entities/programme.entity";

@Entity("majors")
export class Major {
    @PrimaryColumn()
    id: String;

    @Column()
    name: String;

    @ManyToOne(() => Programme, programme => programme.id)
    @JoinColumn({ name: "programme_id" })
    programme: Programme;
}
