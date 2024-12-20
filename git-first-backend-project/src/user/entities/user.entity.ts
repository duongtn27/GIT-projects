import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
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

    @Column()
    email: String

    @Column()
    password: String

    @Column()
    phone: String

    @Column()
    balance: Number
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
