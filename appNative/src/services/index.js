import axios from 'axios';

export default api = axios.create({
  baseURL: 'http://192.168.15.38:9090/',
});

export const users = async () => {
  
  const params = 'v1/user/'
  const res = api.get(params)
  .then((response) => {
    return response.data.message
  })
  .catch(function (error) {
    return error
  })
}