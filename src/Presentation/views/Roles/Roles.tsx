import { View, Text, FlatList } from "react-native"
import useViewModel from "./ViewModel"
import { ItemRole } from "./ItemRole";

export const RolesScreen = () => {

  const { user, roles } = useViewModel();

  // console.log('roles', roles)
  console.log('user', user?.roles)
  // console.log('roles', user?.roles?.length)

  return (
    <View>
      <FlatList
        data={roles}
        renderItem={({ item }) => {

          switch (item.role) {
            case "role.role":
              return <Text>Administrador</Text>
            case "user":
              return <Text>Usuario Normal</Text>
            case "super-user":
              return <Text>Super User</Text>
          }

          return <ItemRole {...item} />
        }}
        keyExtractor={item => item.role}
      />
    </View>
  )
}
