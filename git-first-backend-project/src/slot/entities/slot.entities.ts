import { PrimaryColumn, Generated, Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("slots")
export class Slot {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string

    @Column()
    number: number

    @Column()
    description: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}