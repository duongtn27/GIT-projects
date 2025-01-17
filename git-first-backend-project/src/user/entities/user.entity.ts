import { Column, CreateDateColumn, Entity, Generated, JoinTable, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: String;

    @Column()
    name: String

    @Column()
    sex: Sex

    @Column()
    dob: String

    @Column()
    role: Role

    @Column({ unique: true })
    email: String

    @Column()
    password: String

    @Column()
    phone: String

    @Column()
    balance: Number

    @Column()
    avatar: String

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

export enum Role {
    ADMIN = "ADMIN",
    LECTURER = "LECTURER",
    STUDENT = "STUDENT",
    SECURITY = "SECURITY",
    EMPLOYEE = "EMPLOYEE"
}

export enum Sex {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}
