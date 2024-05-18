import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/Presentation/views/home/Home';
import { RegisterScreen } from '@/Presentation/views/register/Register';
import { ProfileInfoScreen } from '@/Presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from '@/Presentation/views/Roles/Roles';
import { usePushNotification } from '@/Presentation/hooks/usePushNotification';

export type RootStackParams = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
  RolesScreen: undefined;
}

export default function App() {

  const { expoPushToken, notification } = usePushNotification();

  const data = JSON.stringify(notification, null, 2);

  console.log('DATA', data)
  
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

        <Stack.Screen name="RolesScreen"
          component={RolesScreen}
          options={{
            ...pageOptions,
            title: 'Roles',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
