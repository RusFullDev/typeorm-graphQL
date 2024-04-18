import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Users } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Posts {

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    title:string

    @Field()
    @Column()
    content:string

    @ManyToOne((type)=>Users,(author)=>author.posts)
    @Field((type)=>Users)
    author:Users





}
