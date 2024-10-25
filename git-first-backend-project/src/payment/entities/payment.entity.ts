import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"; 

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


}
