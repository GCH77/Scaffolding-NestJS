import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../../domain/model/gateways/user.repository';
import { User } from '../../../../../domain/model/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async getById(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ id }).then((userEntity) => {
      return new User(
        userEntity.id,
        userEntity.name,
        userEntity.email,
        userEntity.phone,
      );
    });
  }
}
