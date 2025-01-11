import { PrimaryColumn, Generated, OneToOne, JoinTable, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn } from "typeorm"
import { User } from "./user.entity"

@Entity("lectures")
export class Lecture {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string

    @OneToOne(() => User, (acc) => acc.lecture, {onDelete:"CASCADE"})
    @JoinColumn()
    account: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}