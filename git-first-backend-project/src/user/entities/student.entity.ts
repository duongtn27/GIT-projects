import { PrimaryColumn, Generated, OneToOne, JoinTable, CreateDateColumn, UpdateDateColumn, Entity, Column } from "typeorm"
import { User } from "./user.entity"

@Entity("students")
export class Student {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string

    @OneToOne(() => User)
    @JoinTable()
    account: User

    @Column()
    gpa: Number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}