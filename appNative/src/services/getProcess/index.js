import api from '..';


export default function logout (hash_phase, access_token, dispatch){
  api.get(`v1/user/process/${hash_phase}`, {
    headers: { 
      Authorization: `Bearer ${access_token}`  
    } 
  })
  .then((response) => {
    function Process(obj) { return { type: 'CHANGE_PROCESS', obj }}
    dispatch(Process(response.data))

    return alert('getProcess: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    alert('getProcess: ' + error) 
    console.log(error)
  })
}
