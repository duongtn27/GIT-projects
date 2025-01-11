import { CreateDateColumn, Entity, Generated, JoinColumn, JoinTable, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("admins")
export class Admin {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string

    @OneToOne(() => User, (acc) => acc.admin, {onDelete: "CASCADE"})
    @JoinColumn()
    account: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}