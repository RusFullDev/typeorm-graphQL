import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreateUserDto {
    @Field({nullable:true})
    name:string
    @Field()
    email:string
}
