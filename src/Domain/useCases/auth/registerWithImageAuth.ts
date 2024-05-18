import { AuthRepositoryImpl } from "@/Data/repositories/AuthRepository";
import { UserRegisterPayload } from "@/Domain/entities";
import { ImagePickerAsset } from "expo-image-picker";

const { registerWithImage } = new AuthRepositoryImpl();

export const RegisterWithImageAuthUseCase = async (user: UserRegisterPayload, file: ImagePickerAsset) => {
  return await registerWithImage(user, file);
}