import { PrimaryColumn, Generated, OneToOne, JoinTable, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm"
import { User } from "./user.entity"

@Entity("employees")
export class Employee {
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