import api from '..';


export default reqTesteApi = (teste) => {

  api.get(teste)
  .then((response) => {
    return alert('reqTesteApi: ' + JSON.stringify(response.data))
  })
  .catch(function (error) {
    return alert(error)
  })
}