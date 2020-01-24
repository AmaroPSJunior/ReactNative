import { createStore } from 'redux';


const INITIAL_STATE = {
  data: ['React Native','ReactJS','NodeJS'],
  process: ['process'],
  authenticated: false,
  itens: [ 'amaro', 'pedro', 'junior'],
  //password: null,
  //access_token: '',
  admin: null,
  login: null,
  user: null,
  project: null,
  phase: null,
  process: null,
  processes: [],
  image: null,
  modal: false,
};

function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE': return { ...state, data: [...state.data, action.title] };
    case 'CHANGE_AUTH': return { ...state, authenticated: action.bool };
    case 'CHANGE_LOGIN': return { ...state, login: action.obj };
    case 'CHANGE_USER': return { ...state, user: action.obj };
    //case 'CHANGE_TOKEN': return { ...state, access_token: action.text };
    case 'CHANGE_ADMIN': return { ...state, admin: action.obj };
    case 'CHANGE_PROJECT': return { ...state, project: action.obj };
    case 'CHANGE_PHASE': return { ...state, phase: action.obj };
    case 'CHANGE_PROCESSES': return { ...state, processes: action.obj };
    case 'CHANGE_PROCESS': return { ...state, process: action.obj };
    case 'CHANGE_IMAGE': return { ...state, image: action.obj };
    case 'CHANGE_MODAL': return { ...state, modal: action.bool };
    default: return state;
  }
} 

const store = createStore(list);
 
export default store;
