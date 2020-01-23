import axios from 'axios';

export default api = axios.create({
  baseURL: 'http://192.168.0.106:9090/',
  //baseURL: 'http://192.168.15.72:9090/',
  //baseURL: 'http://192.168.15.38:9090/',
});
