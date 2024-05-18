import axios from "axios";

const ApiDelivery = axios.create({
  baseURL: 'http://192.168.100.156:4000/api',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer 1234567890',
  }
});

export const ApiDeliveryFormData = axios.create({
  baseURL: 'http://192.168.100.156:4000/api',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
  }
});

export default ApiDelivery;