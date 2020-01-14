import api from '../';
import { useSelector, useDispatch } from 'react-redux'

export default login = (user, password) => {
  const dispatch = useDispatch(); 

  const User = (text) => { return { type: 'CHANGE_USER', text }}
  const Password = (text) => { return { type: 'CHANGE_PASSWORD', text }}
  const changeAuthAction = (bool) => { return { type: 'CHANGE_AUTH', bool }}
  const changeTockenAction = (text) => { return { type: 'CHANGE_TOKEN', text }}
  

  api.post('login', {
     client_id: "houseflix_client",
     client_secret: "92427ae41e4649b934e3b0c44298fc1c149afbf4c8996fbca495991b7852b855",
     grant_type: "xpassword",
     username: user,
     password: password
  })
  .then((response) => {
    const { access_token, error, error_description } = response.data

    if (error) {
      alert('login: ' + error_description)
      return error
    } 

    alert('login: ' + JSON.stringify(response.data))

    dispatch(User(user))
    dispatch(Password(password))
    dispatch(changeAuthAction(true))
    dispatch(changeTockenAction(access_token))
  })
  .catch(function (error) {
    alert('login: ' + error) 
  })
}