import { Campus } from "src/campus/entities/campus.entity";
import { Column, CreateDateColumn, Entity, Generated, JoinTable, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Student } from "./student.entity";
import { Employee } from "./employee.entity";
import { Lecture } from "./lecture.entity";
import { Security } from "./security.entity";
import { Admin } from "./admin.entity";

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

    @Column({nullable: true})
    role: Role

    @Column()
    email: String

    @Column()
    password: String

    @Column()
    phone: String

    @Column({default: 0})
    balance: Number

    @Column()
    avatar: String

    @OneToOne(() => Campus)
    @JoinTable()
    campus: Campus

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Student, (stu) => stu.account, {nullable: true, onDelete: 'CASCADE'})
    student: Student

    @OneToOne(() => Lecture, (lec) => lec.account, {nullable: true, onDelete: 'CASCADE'})
    lecture: Lecture

    @OneToOne(() => Admin, (admin) => admin.account, {nullable: true, onDelete: 'CASCADE'})
    admin: Admin

    @OneToOne(() => Security, (sec) => sec.account, {nullable: true, onDelete: 'CASCADE'})
    security: Security

    @OneToOne(() => Employee, (emp) => emp.account, {nullable: true, onDelete: 'CASCADE'})
    employee: Employee
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
