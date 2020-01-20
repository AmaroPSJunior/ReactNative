import api from '../';

export default function login(user, password, dispatch) {
  
  api.post('login', {
    client_id: "houseflix_client",
    client_secret: "92427ae41e4649b934e3b0c44298fc1c149afbf4c8996fbca495991b7852b855",
    grant_type: "xpassword",
    username: user,
    password: password
  })
  .then(function(response) {
    
    //const dispatch = useDispatch()
    const { access_token, error, error_description } = response.data

    function User(text) { return { type: 'CHANGE_USER', text }}
    function Password(text) { return { type: 'CHANGE_PASSWORD', text }}
    function changeAuthAction(bool) { return { type: 'CHANGE_AUTH', bool }}
    function changeTockenAction(text) { return { type: 'CHANGE_TOKEN', text }}
    
    if (error) {
      return alert('login1: ' + error_description)
    } 
    
    dispatch(User(user))
    dispatch(Password(password))
    dispatch(changeAuthAction(true))
    dispatch(changeTockenAction(access_token))
    
    alert('login: ' + JSON.stringify(response.data.access_token))
  })
  .catch(function (error) {
    console.log('login2: ' + error) 
    alert('login2: ' + error) 
  })

}