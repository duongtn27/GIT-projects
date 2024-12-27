import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn, Generated } from "typeorm";
import { Programme } from "../../programme/entities/programme.entity";

@Entity("departments")
export class Department {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: String;

    @Column()
    name: String;

    @ManyToOne(() => Programme, (programme) => programme.departments)
    programme: Programme
}
