import api from '..';


export default function logout (hash_project, access_token, dispatch){
  api.get(`v1/user/phase/${hash_project}`, {
    headers: { 
      Authorization: `Bearer ${access_token}`  
    } 
  })
  .then((response) => {
    function Phase(obj) { return { type: 'CHANGE_PHASE', obj }}
    dispatch(Phase(response.data))

    return alert('getPhase: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    alert('getPhase: ' + error) 
    console.log(error)
  })
}


