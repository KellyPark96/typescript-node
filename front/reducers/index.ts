import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user, { IUserReducerState } from './user';
import post, { IPostReducerState } from './post';

export interface IReducerState {
  user: IUserReducerState;
  post: IPostReducerState;
}

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
