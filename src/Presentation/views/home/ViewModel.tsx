import { useState } from 'react'

import { LoginAuthUseCase } from '@/Domain/useCases/auth/loginAuth';
import { SaveUserLocalUseCase } from '@/Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks';

const HomeViewModel = () => {
  const { user, getUserSession } = useUserLocal();
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value,
    });
  }
  
  const handleLogin = async () => {
    setErrorMessage('');

    if (!isValidForm()) {
      return false;
    }

    const response = await LoginAuthUseCase(
      values.email,
      values.password
    );
    
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
      profilImg: response.data.profileImg,
      roles: response.data.roles,
      stores: response.data.stores,
    });

    getUserSession();

    return response.data;
  }

  const isValidForm = () => {
    if (!values.email) {
      setErrorMessage('El email es requerido');
      return false;
    }

    if (!values.password) {
      setErrorMessage('La contraseña es requerida');
      return false;
    }

    return true;
  }

  

  return {
    ...values,
    onChange,
    handleLogin,
    errorMessage,
    user,
  }
}

export default HomeViewModel