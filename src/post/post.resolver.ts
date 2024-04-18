
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Posts } from './entities/post.entity';
import { UsersResolver } from 'src/users/users.resolver';

@Resolver('posts')
export class PostResolver {
  constructor(private readonly postService: PostService,
     private readonly userResolver:UsersResolver
  ) {}

  @Mutation(()=>Posts)
  async createPosts(@Args('createPost') createPostDto: CreatePostDto,
@Args('authorId') authorId:number) {
  const author = await this.userResolver.findOneUser(authorId)
    return this.postService.create(createPostDto,author);
  }


  @Query(()=>[Posts])
  findAll() {
    return this.postService.findAll();
  }

  @Query(()=>Posts)
  findOnePosts(@Args('id') id:number) {
    return this.postService.findOne(id);
  }

  @Mutation(()=>Posts)
  updatePosts(@Args('id',{type:()=>ID}) id: number, 
  @Args('updatePost') updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }




  @Mutation(()=>ID)
  removePosts(@Args('id',{type:()=>ID})id: number) {
    return this.postService.remove(id);
  }
}
