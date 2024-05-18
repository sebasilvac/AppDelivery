import { useUserLocal } from "@/Presentation/hooks";



const ViewModel = () => {

  // listado de roles
const roles = [
  {
    role: "admin",
    description: "Administrador",
    img: require("@/assets/admin.png")
  },
  {
    role: "user",
    description: "Usuario Normal",
    img: require("@/assets/admin.png")
  },
  {
    role: "super-user",
    description: "Super Usuario",
    img: require("@/assets/admin.png")
  }

]

  const { user } = useUserLocal();
  return {
    user,
    roles
  }
}

export default ViewModel;