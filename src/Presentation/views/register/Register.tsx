import { View, Text, Image, ScrollView } from 'react-native';

import { CustomTextInput, RoundedButton } from '@/Presentation/components';
import useViewModel from './ViewModel';
import styles from './styles';

export const RegisterScreen = () => {

  const {
    fullName,
    email,
    password,
    confirmPassword,
    onChange: handleChange,
    handleRegister,
    errorMessage,
  } = useViewModel();
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('@/assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('@/assets/user_image.png')} />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.formContainer}>
        <ScrollView>

          <Text style={styles.formText}>REGISTRARSE</Text>

          <CustomTextInput
            name="fullName"
            value={fullName}
            handleChange={handleChange}
            srcImage={require('@/assets/user.png')}
            placeholder="Nombre completo"
          />

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
            secureTextEntry={true}
          />

          <CustomTextInput
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            srcImage={require('@/assets/confirm_password.png')}
            placeholder="Confirmar contraseña"
            secureTextEntry={true}
          />

          <View style={{ marginTop: 40 }}>
            <RoundedButton
              text="CONFIRMAR"
              onPress={handleRegister}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
