/////////// IMPORT TABLES FOR CREATING RELATIONS ///////////
import { Notification } from '../../notifications/entities/notifications.entity';

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

    ////////// RELATIONS WITH OTHER TABLES /////////////
    @OneToMany(() => Notification, notification => notification.service)
    notifications: Notification[];

    ///////////////

    // em nghĩ service không cần link tới submission nữa
    // @OneToMany(() => Submission, submission => submission.service)
    // submissions: Submission[]; // thêm mối quan hệ OneToMany với Submission
}
