import api from '../'
import getUser from '../getUser'

export default function login(user, password, dispatch) {
  
  api.post('login', {
    client_id: "houseflix_client",
    client_secret: "92427ae41e4649b934e3b0c44298fc1c149afbf4c8996fbca495991b7852b855",
    grant_type: "xpassword",
    username: user,
    password: password
  })
  .then(function(response) {
    //function changeAuthAction(bool) { return { type: 'CHANGE_AUTH', bool }}
    function Login(obj) { return { type: 'CHANGE_LOGIN', obj }}
    dispatch(Login(response.data))
    getUser(response.data.access_token, dispatch, 'x') 
    
    console.log('login res: ' + JSON.stringify(response.data.access_token))
  })
  .catch(function (error) {

    console.log('login err: ' + error) 
    alert('login2: ' + error) 
  })

}
