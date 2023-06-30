import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm'


@Entity()
export class User extends BaseEntity {

    @PrimaryColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string
}