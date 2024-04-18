import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersResolver } from './users.resolver';
import { Posts } from 'src/post/entities/post.entity';
import { Users } from './entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Users,Posts])],
  controllers: [UsersController],
  providers: [UsersService,UsersResolver],
})
export class UsersModule {}
