import api from '..';


export default function getProcesses (hashPhase, accessToken, dispatch){
  api.get(`v1/user/process/${hashPhase}`, {
    headers: { 
      Authorization: `Bearer ${accessToken}`  
    } 
  })
  .then((response) => {
    function Processes(obj) { return { type: 'CHANGE_PROCESSES', obj }}
    dispatch(Processes(response.data))

    return alert('getProcesses: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    alert('getProcesses: ' + error) 
    console.log(error)
  })
}
