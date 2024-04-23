import { useEffect, useState } from 'react';
import { RegisterAuthUseCase } from '@/Domain/useCases/auth/registerAuth';
import { User } from '@/Domain/entities/User';


const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if(errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

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

    const user: User = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    }

    const response = await RegisterAuthUseCase(user);
    
    if (!response.success) {
      setErrorMessage(response.message);
      return;
    }

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
  }
}

export default RegisterViewModel