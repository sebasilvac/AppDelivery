import { View, Text, Image, ScrollView, TouchableOpacity, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { CustomTextInput, RoundedButton } from '@/Presentation/components';
import useViewModel from './ViewModel';
import styles from './styles';
import React, { useState } from 'react';
import { ModalPickImage } from '../../components/ModalPickImage/ModalPickImage';


export const RegisterScreen = () => {

  const {
    fullName,
    email,
    password,
    confirmPassword,
    onChange: handleChange,
    handleRegister,
    errorMessage,
    pickImage,
    file: image,
    takePhoto,
  } = useViewModel();

  const [modalVisible, setModalVisible] = useState(false);

  const imgSrc = !image ? require('@/assets/user_image.png') : { uri: image.uri };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
          <Image
            style={styles.imageBackground}
            source={require('@/assets/chef.jpg')}
          />

          <View style={styles.logoContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image style={styles.logoImage} source={imgSrc} />
              <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer}>
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

              <View style={{ marginTop: 60 }}>
                <RoundedButton
                  text="CONFIRMAR"
                  onPress={handleRegister}
                />
              </View>
          </View>

          <ModalPickImage
            openGallery={pickImage}
            openCamera={takePhoto}
            modalUseState={modalVisible}
            setModalUseState={setModalVisible}
          />

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
