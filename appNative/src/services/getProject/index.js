import api from '..';


export default function logout (access_token, dispatch){
  api.get('v1/user/project/', {
    headers: { 
      Authorization: `Bearer ${access_token}`  
    } 
  })
  .then((response) => {
    function Project(obj) { return { type: 'CHANGE_PROJECT', obj }}
    dispatch(Project(response.data))

    return alert('getProject: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    alert('getProject: ' + error) 
    console.log(error)
  })
}
