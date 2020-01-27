import api from '../';
import { useSelector, useDispatch } from 'react-redux'



export default function logout (access_token){
  
api.post(`logout/${access_token}`)
  .then((response) => {
    console.log('logout: ' + JSON.stringify(response.data.message))
    return alert('logout: ' + JSON.stringify(response.data.message))

  })
  .catch(function (error) {
    alert('logout: ' + error) 
    console.log(error)
  })
}