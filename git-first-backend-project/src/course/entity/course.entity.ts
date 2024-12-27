import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("courses")
export class Course {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: String;

    @Column()
    name: String;

    @Column()
    fee: String;

    @Column()
    credit: number;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
