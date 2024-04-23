import { User } from '@/Domain/entities/User';
import { UserLocalRepository } from '@/Domain/repositories/UserLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';

export class UserLocalRepositoryImpl implements UserLocalRepository {
  
  async saveUser(user: User): Promise<void> {
    const { save } = LocalStorage();
    await save('user', JSON.stringify(user));
  }

  async getUser(): Promise<User | null> {
    const { get } = LocalStorage();
    const user = await get('user');


    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  async removeUser(): Promise<void> {
    const { remove } = LocalStorage();
    await remove('user');
  }
}
