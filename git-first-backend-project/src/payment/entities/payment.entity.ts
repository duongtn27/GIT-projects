import { Column, Entity, OneToOne, PrimaryGeneratedColumn, ManyToOne } from "typeorm"; 
import { User } from '../../user/entities/user.entity'
import { Submissions } from '../../submission/entities/submission.entity'
@Entity()
export class Payments {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    user_id: number;//Foreign key

    @Column()
    created_at: Date;

    @Column()
    type: string; //Submission or Service

    @Column()
    description:  string;

    @Column()
    price: number;

    @Column()
    status:  string;//pending, paid, failed

    @OneToOne(() => User) 
    user: User

    @ManyToOne(() => Submissions, submission => submission.payment) 
    submission: Submissions;
}
    