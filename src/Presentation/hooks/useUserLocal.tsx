import { useEffect, useState } from "react"
import { GetUserLocalUseCase } from "@/Domain/useCases/userLocal/GetUserLocal";
import { User } from "@/Domain/entities/User";

const useUserLocal = () => {
  const [user, setUser] = useState<User | null>(null);

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();

    console.log('USUARIOOOO', user)
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

export default useUserLocal;
