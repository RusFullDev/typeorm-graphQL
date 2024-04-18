import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from './entities/user.entity';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(()=>[Users])
  findAllUser() {
    return this.usersService.findAll();
  }


  @Query(()=>Users)
  findOneUser(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  
  @Mutation(()=>Users)
  createUser(@Args('createUser') createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Mutation(()=>Users)
  updateUser(@Args('id',{type:()=>ID}) id:number, 
  @Args('updateUser') updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Mutation(()=>ID)
  removeUser(@Args('id',{type:()=>ID}) id: number) {
    return this.usersService.remove(id);
  }
}
