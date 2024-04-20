import React from 'react';
import {
  View,
  TextInput,
  ToastAndroid,
  StyleSheet,
  Image,
  Text,
  Platform,
} from 'react-native';
import { RoundedButton } from '@/components';

export const HomeScreen = () => {
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('@/assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('@/assets/logo.png')} />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formText}>INGRESAR</Text>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('@/assets/email.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Correo electrónico"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('@/assets/password.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 40 }}>
          <RoundedButton
            text="ENTRAR"
            onPress={() => {
              isAndroid &&
                ToastAndroid.show('Ingresando...', ToastAndroid.SHORT);
              // isIOS && alert('Botón presionado');
            }}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>No Tienes cuenta?</Text>
          <Text style={styles.formRegisterText}>Registrate</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    bottom: '25%',
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom: 0,
    height: '40%',
    padding: 20,
    position: 'absolute',
    width: '100%',
  },
  formText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 15,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 15,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  formRegisterText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 10,
    fontStyle: 'italic',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
  },
});
