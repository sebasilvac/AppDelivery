import { UserLocalRepositoryImpl } from "@/Data/repositories/UserLocalRepository";
import { User } from "@/Domain/entities/User";

const { saveUser } = new UserLocalRepositoryImpl();

export const SaveUserLocalUseCase = async (user: User) => {
  return await saveUser(user);
}