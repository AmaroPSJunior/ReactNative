import api from '../';


export default login = (user, password) => {

  api.post('login', {
     client_id: "houseflix_client",
     client_secret: "92427ae41e4649b934e3b0c44298fc1c149afbf4c8996fbca495991b7852b855",
     grant_type: "xpassword",
     username: user,
     password: password
  })
  .then((response) => {
    const { access_token, data, error, error_description } = response.data

    if (error) {
      alert('login: ' + error_description)
    } 

    return alert('login: ' + JSON.stringify(data))
  })
  .catch(function (error) {
    console.log('ER' + error) 
    alert('ER' + error) 
  })
}