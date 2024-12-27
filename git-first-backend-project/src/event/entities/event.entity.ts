import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Department } from "../../deparment/entities/department.entity";

@Entity("events")
export class Event {
    @PrimaryColumn()
    id: String;

    @Column()
    name: String;

    @Column("text", { array: true })
    speaker: String[];
    
    @Column("text", { array: true })
    participants: string[];

    @Column({type: "timestamp"})
    time: Date;

    @Column({type: "timestamp"})
    created_at: Date;

    @Column({type: "timestamp"})
    updated_at: Date;

    @Column("text")
    location: String;

    @Column("text")
    description: String;
    

    @ManyToOne(() => Department, major => major.id, { nullable: true })
    @JoinColumn({ name: "major_id" })
    major: Department | null;
}
