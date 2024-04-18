import { Field, InputType, Int } from "@nestjs/graphql";
import {  Users } from "src/users/entities/user.entity";

@InputType()
export class CreatePostDto {
    @Field()
    title:string

    @Field()
    content:string
 
    // @Field((type)=>Int,{nullable:true})
    // author:Users

}
