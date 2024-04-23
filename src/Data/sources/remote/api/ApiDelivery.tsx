import axios from "axios";

const ApiDelivery = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer 1234567890',
  }
});

export default ApiDelivery;