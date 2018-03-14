import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED, LOG_OUT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { user_info: action.payload };
    case LOGIN_FAILED:
      return { error: action.payload };
    case REGISTER_SUCCESS:
      return { user_id: action.payload };
    case REGISTER_FAILED:
      return { error: action.payload };
    case LOG_OUT:
      return { user_info: null };
    default:
      return state;
  }
};
