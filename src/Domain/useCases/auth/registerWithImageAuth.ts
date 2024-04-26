import { AuthRepositoryImpl } from "@/Data/repositories/AuthRepository";
import { User } from "@/Domain/entities/User";
import { ImagePickerAsset } from "expo-image-picker";

const { registerWithImage } = new AuthRepositoryImpl();

export const RegisterWithImageAuthUseCase = async (user: User, file: ImagePickerAsset) => {
  return await registerWithImage(user, file);
}