import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Service } from '../../service/entities/service.entity';

@Entity("submission")
export class Submission {
    @PrimaryColumn()
    id: string;

    @Column()
    purpose: string;

    @Column()
    documentPath: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column({ nullable: true })
    date_completed: Date;

    @Column()
    status: string;

    // @Column()
    // student_id: string; //foreign key
    // lmao123

    @ManyToOne(() => Service, service => service.id)
    service: Service; // foreign key là id của service
}
