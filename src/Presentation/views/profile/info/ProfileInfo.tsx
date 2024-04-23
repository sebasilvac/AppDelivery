import { View, Text, Button } from "react-native"
import useViewModel from "./ViewModel"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "App"

interface ProfileInfoScreenProps extends StackScreenProps<RootStackParams, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({
  navigation,
  route,
}: ProfileInfoScreenProps) => {

  const { handleLogout } = useViewModel()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Profile Info
      </Text>

      <Button
        title="Logout"
        onPress={() => {
          handleLogout()
          navigation.navigate('HomeScreen')
        }}
      />
      
    </View>
  )
}
