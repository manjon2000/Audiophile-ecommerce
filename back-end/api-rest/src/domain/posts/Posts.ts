import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity()
class Posts {


    @PrimaryColumn()
    id: Number

    @Column()
    title: String

    @Column()
    extract: String

    @Column()
    content: String

    @Column()
    updatedAt: Date

    @Column()
    createdAt: Date
} 


export default Posts