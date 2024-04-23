import { User } from "../entities/User";

export interface UserLocalRepository {
  saveUser(user: User): Promise<void>;
  getUser(): Promise<User | null>;
  removeUser(): Promise<void>;
}
