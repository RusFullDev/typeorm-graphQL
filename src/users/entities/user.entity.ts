import { Field, ID, ObjectType } from "@nestjs/graphql";
import {Posts } from "src/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Users {

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field({nullable:true})
    @Column({nullable:true})
    name:string

    @Field()
    @Column()
    email:string

    @Field()
    @CreateDateColumn()
    createdAt:Date

    @Field()
    @UpdateDateColumn()
    updatedAt:Date
    

    @OneToMany((type)=>Posts,(post)=>post.author)
    @Field((type)=>[Posts])
    posts:Posts[]

}
