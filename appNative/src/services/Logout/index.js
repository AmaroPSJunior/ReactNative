import api from '../';
import { useSelector, useDispatch } from 'react-redux'


export default logout = (access_token) => {
  const state = useSelector(state => state)
  const { access_token } = state
  console.log('Logout: ' + access_token)

  api.post('logout: ', access_token)
  .then((response) => {

    if (error) {
      alert('logout: ' + error)
      return error
    } 
    return alert('logout: ' + JSON.stringify(data))
  })
  .catch(function (error) {
    alert('logout: ' + error) 
  })
}