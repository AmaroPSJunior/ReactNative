import api from '../urlBase';


export default postSignUp = () => {

  api.get('v1/signUp')
  .then((response) => {
    return alert('postSignUp: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    return alert(error)
  })
}