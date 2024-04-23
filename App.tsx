import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/Presentation/views/home/Home';
import { RegisterScreen } from '@/Presentation/views/register/Register';
import { ProfileInfoScreen } from '@/Presentation/views/profile/info/ProfileInfo';

export type RootStackParams = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
}

export default function App() {
  
  const Stack = createNativeStackNavigator<RootStackParams>();

  const pageOptions = {
    headerShown: true,
    headerBackTitleVisible: false,
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="RegisterScreen"
          component={RegisterScreen}
          options={{
            ...pageOptions,
            title: 'Registro',
          }}
        />
        <Stack.Screen name="ProfileInfoScreen"
          component={ProfileInfoScreen}
          options={{
            ...pageOptions,
            title: 'Perfil',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
