import api from '..';


export default getUsers = (access_token, dispatch, id = null) => {
  api.get(`v1/user/${id}`, {
    headers: { 
      Authorization: `Bearer ${access_token}`  
    } 
  })
  .then((response) => {
    function User(obj) { return { type: 'CHANGE_USER', obj }}
    dispatch(User(response.data))
    
    return alert('getUser: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    alert('getUser: ' + error) 
    console.log(error)
  })
}