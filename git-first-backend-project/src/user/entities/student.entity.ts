import { PrimaryColumn, Generated, OneToOne, JoinTable, CreateDateColumn, UpdateDateColumn, Entity, Column, JoinColumn } from "typeorm"
import { User } from "./user.entity"

@Entity("students")
export class Student {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string

    @OneToOne(() => User, (acc) => acc.student, {onDelete: "CASCADE"})
    @JoinColumn()
    account: User

    @Column({nullable: true})
    gpa: Number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}