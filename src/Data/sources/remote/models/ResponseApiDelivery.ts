export interface ResponseApiDelivery {
  data?: any;
  success: boolean;
  message: string;
}

export interface ResponseRegisterApi {
  email:    string;
  fullName: string;
  id:       string;
  isActive: boolean;
  roles:    string[];
  token:    string;
}

export interface ErrorResponseRegisterAPI {
  statusCode: number;
  message:    string[];
  error:      string;
}
