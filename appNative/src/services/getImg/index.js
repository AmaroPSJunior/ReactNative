import api from '..';
import { Image } from 'react-native'
import react from 'react'


export default getImg = (hash_user, hash_process, title_File) => {
  var teste = 'http://localhost:9090/uploads/e966bb69-462d-0d6660cf/2887d7bc-2741-4e1bb8ab/pro-amaro-2.jpg'

  api.get(`uploads/${hash_user}/${hash_process}/${title_File}`)
  .then(async (response) => {
    //alert(response.data)
    //return(response.data)
    return console.log(response)
  })
  .catch(function (error) {
    alert('getUser: ' + error) 
    console.log(error)
  })
}