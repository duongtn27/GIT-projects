import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn, Generated } from "typeorm";
import { Department } from "../../deparment/entities/department.entity";

@Entity("events")
export class Event {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string;

    @Column()
    name: string;

    @Column("text", { array: true })
    speaker: string[];
    
    @Column("text", { array: true })
    participants: string[];

    @Column({type: "timestamp"})
    time: Date;

    @Column({type: "timestamp"})
    created_at: Date;

    @Column({type: "timestamp"})
    updated_at: Date;

    @Column("text")
    location: string;

    @Column("text")
    description: string;
    

    @ManyToOne(() => Department, Department => Department.id, { nullable: true })
    @JoinColumn({ name: "Department_id" })
    Department: Department | null;
}
