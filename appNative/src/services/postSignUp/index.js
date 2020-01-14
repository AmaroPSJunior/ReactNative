import api from '../';


export default postSignUp = (
  name,
  email,
  user,
  password,
  address,
  number,
  complement,
  zip,
  district,
  city,
  state,
  status
) => {
  const config = {
    headers: {
      'Accept': '*',
      'Content-Type': 'multipart/form-data'
    }
  }
  
  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('user', user)
  formData.append('password', password)
  formData.append('address', address)
  formData.append('number', number)
  formData.append('complement', complement)
  formData.append('zip', zip)
  formData.append('district', district)
  formData.append('city', city)
  formData.append('state', state)
  formData.append('status', status)

  api.post('v1/signup', formData, config)
  .then((response) => {
    console.log('postSignUp: ' + response.data)
    alert('postSignUp: ' + response.data.message)
  })
  .catch(function (error) {
    alert('postSignUp: ' + error)
  })
}