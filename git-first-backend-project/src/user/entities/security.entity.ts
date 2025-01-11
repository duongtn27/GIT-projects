import { PrimaryColumn, Generated, OneToOne, JoinTable, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn } from "typeorm"
import { User } from "./user.entity"

@Entity("securities")
export class Security {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string

    @OneToOne(() => User, (acc) => acc.security, {onDelete: "CASCADE"})
    @JoinColumn()
    account: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}