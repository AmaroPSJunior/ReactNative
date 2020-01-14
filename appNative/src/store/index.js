import { createStore } from 'redux';


const INITIAL_STATE = {
  data: ['React Native','ReactJS','NodeJS'],
  process: ['process'],
  authenticated: false,
  itens: [ 'amaro', 'pedro', 'junior'],
  user: null,
  password: null,
  access_token: '',
};


function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE': return { ...state, data: [...state.data, action.title] };
    case 'ADD_ITEM': return { ...state, process: [...state.process, action.title] };
    case 'CHANGE_AUTH': return { ...state, authenticated: action.bool };
    case 'CHANGE_USER': return { ...state, user: action.text };
    case 'CHANGE_PASSWORD': return { ...state, password: action.text };
    case 'CHANGE_TOKEN': return { ...state, access_token: action.text };
    default: return state;
  }
} 

const store = createStore(list);
 
export default store;
