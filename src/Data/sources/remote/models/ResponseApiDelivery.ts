export interface ResponseApiDelivery {
  data?: any;
  success: boolean;
  message: string;
}

export interface Store {
  id:  string;
  name: string;
  description: string;
  slug: string;
}

export interface ResponseRegisterApi {
  email:    string;
  fullName: string;
  id:       string;
  isActive: boolean;
  roles:    string[];
  stores:   Store[];
  token:    string;
}

export interface ErrorResponseRegisterAPI {
  statusCode: number;
  message:    string[];
  error:      string;
}
