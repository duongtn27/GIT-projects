// export class Campus {}
import { Employee } from "src/user/entities/employee.entities";
import { Column, CreateDateColumn, Entity, Generated, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Campus {
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    hotline: string;

    @Column()
    rooms: string;

    @OneToOne(() => Employee)
    @JoinTable()
    director: Employee;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
