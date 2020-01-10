import { createStore } from 'redux';
import api from '../services'
import users from '../services'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'


const reqUsers = async () => {
  //const state = useSelector(state => state)

  const params = 'v1/user/'
  api.get(params)
  .then((response) => {
    if (response.data.error) {
      //state.itens = response.data.message
      console.log('state:', response )
    }
  })
  .catch(function (error) {
    console.log('erro: ' + error) 
    alert('erro: ' + error) 
  })
}

const INITIAL_STATE = {
  data: ['React Native','ReactJS','NodeJS'],
  process: ['process'],
  authenticated: false,
  itens: [ 'amaro', 'pedro', 'junior'],
  user: null,
  password: null,
  tokem: '',
};


function list(state = INITIAL_STATE, action) {
  reqUsers()
  switch (action.type) {
    case 'ADD_COURSE': return { ...state, data: [...state.data, action.title] };
    case 'ADD_ITEM': return { ...state, process: [...state.process, action.title] };
    case 'CHANGE_AUTH': return { ...state, authenticated: action.bool };
    case 'CHANGE_USER': return { ...state, user: action.text };
    case 'CHANGE_PASSWORD': return { ...state, password: action.text };
    case 'CHANGE_TOKEN': return { ...state, tokem: action.text };
    default: return state;
  }
} 

const store = createStore(list);
 
export default store;
