import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../model/gateways/user.repository';
import { User } from '../../model/user';

@Injectable()
export class UserUseCaseService {
  constructor(private readonly userRepository: UserRepository) {}

  getById(id: string): Promise<User> {
    return this.userRepository.getById(id);
  }
}
