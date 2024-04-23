import { UserLocalRepositoryImpl } from '@/Data/repositories/UserLocalRepository';
import { User } from '@/Domain/entities/User';

const { getUser } = new UserLocalRepositoryImpl();

export const GetUserLocalUseCase = async (): Promise<User | null> => {
  return await getUser();
};
