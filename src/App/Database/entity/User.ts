import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false, length: 50})
    email: string;

    @Column({type: 'varchar', nullable: false, length: 255})
    password: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    dateCreated: Date;
}
