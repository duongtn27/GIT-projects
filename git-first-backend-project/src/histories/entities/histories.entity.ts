import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

/**
 * Records past changes of objects
 */
@Entity()
export class History {
    @PrimaryGeneratedColumn('uuid')
    historyId: string;

    // ID of the changed entity 
    @Column()
    entityId: string;

    // 
    @Column({ type: 'varchar', length: 50 })
    versionNumber: string;

    //
    @CreateDateColumn()
    changeDate: Date;

    // uuid of the person making the change
    @Column()
    changedByUserId: string;

    // content of the old version
    @Column({ type: 'text' })
    versionData: string;

    // optional description of this version
    @Column({ nullable: true })
    description: string;

}
