import { createStore } from 'redux';
//git

const INITIAL_STATE = {
  data: ['React Native','ReactJS','NodeJS'],
  process: ['process'],
  authenticated: false,
};

function list(state = INITIAL_STATE, action) {
  console.log('authenticated:', state.authenticated)
  switch (action.type) {
    case 'ADD_COURSE': return { ...state, data: [...state.data, action.title] };
    case 'ADD_ITEM': return { ...state, process: [...state.process, action.title] };
    case 'CHANGE_AUTH': return { ...state, authenticated: action.bool };
    default: return state;
  }
} 

const store = createStore(list);
 
export default store;
