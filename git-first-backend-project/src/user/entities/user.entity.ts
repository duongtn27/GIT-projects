/////////// IMPORT TABLES FOR CREATING RELATIONS ///////////
import { History } from '../../histories/entities/histories.entity';
import { Notification } from '../../notifications/entities/notifications.entity';

import { Column, Entity, Generated, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";

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

    ////////// RELATIONS WITH OTHER TABLES /////////////
    @OneToMany(() => History, history => history.user)
    histories: History[]

    @ManyToMany(() => Notification, notification => notification.users)
    notifications: Notification[];
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
