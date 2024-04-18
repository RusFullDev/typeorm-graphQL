import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo:Repository<Users>){}

  create(createUserDto: CreateUserDto) {
    return this.userRepo.save(createUserDto)
  }

  findAll() {
    return this.userRepo.find({relations:['posts']})
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({id})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepo.update({id},updateUserDto)
    return this.findOne(id)
  }

 async remove(id: number) {
    await this.userRepo.delete({id})
    return id
  }
}
