import api from '..';


export default getUsers = (id = null) => {

  api.get(`v1/user/${id}`)
  .then((response) => {
    return alert('getUser: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    return alert(error)
  })
}