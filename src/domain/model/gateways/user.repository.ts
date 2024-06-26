import { User } from '../user';

export abstract class UserRepository {
  abstract getById(id: string): Promise<User>;
}
