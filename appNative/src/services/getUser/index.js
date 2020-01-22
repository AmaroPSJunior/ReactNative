import api from '..';


export default getUsers = (access_token, dispatch, id = null) => {
  api.get(`v1/user/${id}`, {
    headers: { 
      Authorization: `Bearer ${access_token}`  
    } 
  })
  .then(async (response) => {
    function changeAuthAction(bool) { return { type: 'CHANGE_AUTH', bool }}
    function User(obj) { return { type: 'CHANGE_USER', obj }}
    dispatch(User(response.data))
    dispatch(changeAuthAction(true))
    //alert('getUser: ' + JSON.stringify(response.data.user))
  })
  // .then(() => {
  //   function changeAuthAction(bool) { return { type: 'CHANGE_AUTH', bool }}
  //   dispatch(changeAuthAction(true))
  // })
  .catch(function (error) {
    alert('getUser: ' + error) 
    console.log(error)
  })
}