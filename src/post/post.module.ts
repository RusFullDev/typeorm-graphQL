import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Users } from 'src/users/entities/user.entity';
import { Posts } from './entities/post.entity';
import { UsersService } from 'src/users/users.service';
import { UsersResolver } from 'src/users/users.resolver';
import { PostResolver } from './post.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Users,Posts])],
  controllers: [PostController],
  providers: [PostService,UsersService,UsersResolver,PostResolver],
})
export class PostModule {}
