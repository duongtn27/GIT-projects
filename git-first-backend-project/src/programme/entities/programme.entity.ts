import { Department } from "src/deparment/entities/department.entity";
import { Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("programmes")
export class Programme {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: String;

    @Column()
    name: String;

    @Column()
    description: String;

    @OneToMany(() => Department, (department) => department.programme)
    departments: Department[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
