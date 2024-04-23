import { AxiosError } from 'axios';

import { User } from '@/Domain/entities/User';
import { AuthRepository } from '@/Domain/repositories/AuthRepository';
import ApiDelivery from '../sources/remote/api/ApiDelivery';
import {
  ErrorResponseRegisterAPI,
  ResponseApiDelivery,
  ResponseRegisterApi
} from '../sources/remote/models/ResponseApiDelivery';

export class AuthRepositoryImpl implements AuthRepository {

  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseRegisterApi>('/auth/signup', user);

      return Promise.resolve({
        success: true,
        message: 'Usuario creado con éxito',
        data: response.data as ResponseRegisterApi,
      });
    } catch (error) {
      let e = (error as AxiosError);
      const dataError = e.response!.data as ErrorResponseRegisterAPI;      
      return Promise.resolve({
        success: false,
        message: dataError.message ? dataError.message.join(', ')  : 'Error al crear el usuario',
        data: null
      });
      
    }
  }

  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseRegisterApi>('/auth/signin', { email, password });

      return Promise.resolve({
        success: true,
        message: 'Usuario logeado con éxito',
        data: response.data as ResponseRegisterApi,
      });
    } catch (error) {
      let e = (error as AxiosError);
      const dataError = e.response!.data as ErrorResponseRegisterAPI;


      let message: any = dataError.message ?? 'Error al logear el usuario';
      if(dataError.message && typeof dataError.message !== 'string') {
        message = dataError.message.join(', ');
      }

      return Promise.resolve({
        success: false,
        message: message,
        data: null
      });
      
    }
  }
}