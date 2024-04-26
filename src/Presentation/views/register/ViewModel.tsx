import { useEffect, useState } from 'react';
import { RegisterAuthUseCase } from '@/Domain/useCases/auth/registerAuth';
import { User } from '@/Domain/entities/User';
import { useImagePicker, useUserLocal } from '@/Presentation/hooks';
import { RegisterWithImageAuthUseCase } from '@/Domain/useCases/auth/registerWithImageAuth';
import { SaveUserLocalUseCase } from '@/Domain/useCases/userLocal/SaveUserLocal';

const RegisterViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  });
  
  const { user, getUserSession } = useUserLocal();
  const { file, setFile, pickImage, takePhoto} = useImagePicker();

  useEffect(() => {
    if(errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if(file) {
      onChange('image', file.uri);
    }
  }, [file]);

  const onChange = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value,
    });
  }
  
  const handleRegister = async () => {
    if (!isValidForm()) {
      return false;
    }

    setLoading(true);

    const user: User = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    }

    //const response = await RegisterAuthUseCase(user);
    const response = file ? await RegisterWithImageAuthUseCase(user, file) : await RegisterAuthUseCase(user);
    setLoading(false);
    
    if (!response.success) {
      setErrorMessage(response.message);
      return;
    }

    await SaveUserLocalUseCase({
      id: response.data.id,
      fullName: response.data.fullName,
      email: response.data.email,
      sessionToken: response.data.token,
      password: '',
    });

    getUserSession();

    return response.data;
  }

  const isValidForm = () => {
    if (values.fullName === '' || values.email === '' || values.password === '' || values.confirmPassword === '') {
      setErrorMessage('Todos los campos son requeridos');
      return false;
    }

    //confirm password
    if (values.password !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return false;
    }

    return true;
  }

  return {
    ...values,
    onChange,
    handleRegister,
    errorMessage,
    pickImage,
    file,
    takePhoto,
    user,
    loading,
  }
}

export default RegisterViewModel