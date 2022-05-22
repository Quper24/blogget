import { createStore } from 'redux';
import { getToken, setToken } from '../api/token';

const initialState = {
  comment: 'Привет Redux',
  token: getToken(),
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const updateToken = token => {
  setToken(token);
  return {
    type: UPDATE_TOKEN,
    token,
  };
};

export const delToken = () => {
  setToken('');
  return {
    type: UPDATE_TOKEN,
    token: '',
  };
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
