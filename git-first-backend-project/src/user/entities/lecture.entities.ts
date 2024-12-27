import { PrimaryColumn, Generated, OneToOne, JoinTable, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm"
import { User } from "./user.entity"

@Entity("lectures")
export class Lecture {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string

    @OneToOne(() => User)
    @JoinTable()
    account: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}