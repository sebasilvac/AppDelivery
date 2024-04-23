import { useEffect, useState } from "react"
import { GetUserLocalUseCase } from "@/Domain/useCases/userLocal/GetUserLocal";
import { User } from "@/Domain/entities/User";

export const useUserLocal = () => {
  const [user, setUser] = useState<User | null>(null);

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  }

  useEffect(() => {
    getUserSession();
  }, []);

  return {
    user,
    getUserSession
  }
}
