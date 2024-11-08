import { Column, Entity, OneToOne, Generated, PrimaryColumn, ManyToOne } from "typeorm"; 
import { User } from '../../user/entities/user.entity'
import { Submission } from '../../submission/entities/submission.entity'
@Entity("payment")
export class Payments {
    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: String;

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

    @ManyToOne(() => Submission, submission => submission.payment) 
    submission: Submission;
}
    