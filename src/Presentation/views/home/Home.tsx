import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  KeyboardAvoidingView,
  TouchableWithoutFeedback, 
  Keyboard,
} from 'react-native';

import { RootStackParams } from 'App';
import { RoundedButton } from '@/Presentation/components';
import useViewModel from './ViewModel';
import { CustomTextInput } from '@/Presentation/components/CustomTextInput/CustomTextInput';
import styles from './styles';
import { useEffect } from 'react';

const isAndroid = Platform.OS === 'android';

interface HomeScreenProps
  extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const {
    email,
    password,
    onChange: handleChange,
    handleLogin,
    errorMessage,
    user,
  } = useViewModel();

  useEffect(() => {
    if (user && user.sessionToken) {

      console.log('User', user)
      
      if(user.roles?.length > 1) {
        navigation.replace('ProfileInfoScreen');
        return;
      }

      navigation.replace('ProfileInfoScreen');
    }
  }, [user]);

  useEffect(() => {
    if (errorMessage) {
      console.log('Error', errorMessage);
      isAndroid
        ? ToastAndroid.show(errorMessage, ToastAndroid.SHORT)
        : alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    <KeyboardAvoidingView
      behavior={isAndroid ? 'height' : 'padding'}
      style={styles.container}>
      <View>
        <Image
          style={styles.imageBackground}
          source={require('@/assets/chef.jpg')}
        />

        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('@/assets/logo.png')}
          />
          <Text style={styles.logoText}>FOOD APP</Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formContainer}>
            <Text style={styles.formText}>INGRESAR</Text>

            <CustomTextInput
              name="email"
              value={email}
              handleChange={handleChange}
              srcImage={require('@/assets/email.png')}
              placeholder="Correo electrónico"
              keyboardType="email-address"
            />

            <CustomTextInput
              name="password"
              value={password}
              handleChange={handleChange}
              srcImage={require('@/assets/password.png')}
              placeholder="Contraseña"
              keyboardType="default"
              secureTextEntry={true}
            />

            <View style={{ marginTop: 40 }}>
              <RoundedButton text="ENTRAR" onPress={handleLogin} />
            </View>

            <View style={styles.formRegister}>
              <Text>No Tienes cuenta?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RegisterScreen');
                }}>
                <Text style={styles.formRegisterText}>Registrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
};
