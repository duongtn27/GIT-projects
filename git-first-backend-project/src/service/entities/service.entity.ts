import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
// import { Submission } from '../../submission/entities/submission.entity';

@Entity("service")
export class Service {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    handler: string;

// em nghĩ service không cần link tới submission nữa
    // @OneToMany(() => Submission, submission => submission.service)
    // submissions: Submission[]; // thêm mối quan hệ OneToMany với Submission
}
