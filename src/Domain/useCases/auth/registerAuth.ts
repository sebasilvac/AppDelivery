import { AuthRepositoryImpl } from "@/Data/repositories/AuthRepository";
import { UserRegisterPayload } from "@/Domain/entities";

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (user: UserRegisterPayload) => {
  return await register(user);
}