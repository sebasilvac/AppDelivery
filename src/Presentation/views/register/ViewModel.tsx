import { useEffect, useState } from 'react';
import { RegisterAuthUseCase } from '@/Domain/useCases/auth/registerAuth';
import { User } from '@/Domain/entities/User';
import { useImagePicker } from '@/Presentation/hooks';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  });

  const { file, setFile, pickImage, takePhoto} = useImagePicker();

  useEffect(() => {
    if(errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if(file) {
      console.log('ImagePicker: ', file.uri)
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
    pickImage,
    file,
    takePhoto,
  }
}

export default RegisterViewModel