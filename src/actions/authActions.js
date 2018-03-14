import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { LOGIN_FAILED, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED, LOG_OUT } from './types';

INIT_STATE = {
  isLogin: false
};

URL_API = 'https://infinityloop.com/api.php';

axios.defaults.baseURL = URL_API;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export const register = (
  email = '',
  password = '',
  name = '',
  birthday = '',
  sex = 1,
  image = '',
  gmt = 3,
  language = 'ru'
) => async dispatch => {
  const fullname = name.split(' ');
  let dataF = new FormData();
  dataF.append('email', email);
  dataF.append('password', password);
  dataF.append('language', language);
  dataF.append('gmt', gmt);
  dataF.append('sex', sex);
  dataF.append('birthday', birthday);
  dataF.append('firstname', fullname[0]);
  dataF.append('lastname', fullname[1]);

  const response = await axios.post('?act=register.send', dataF, { withCredentials: true });
  const { data } = response;

  if (data.error === 0) {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);

    dispatch({ type: REGISTER_SUCCESS, payload: data.response });
  } else {
    dispatch({ type: REGISTER_FAILED, payload: { error: data.error, msg: data.error_msg } });
  }
};

export const logOut = () => async dispatch => {
  await AsyncStorage.removeItem('email');
  await AsyncStorage.removeItem('password');
  return dispatch({ type: LOG_OUT });
};

export const login = (email, password, language = 'ru') => async dispatch => {
  let dataF = new FormData();
  dataF.append('email', email);
  dataF.append('password', password);
  dataF.append('language', language);

  const response = await axios.post('?act=login', dataF, { withCredentials: true });

  const { data } = response;
  console.log('login');
  if (data.error === 0) {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);

    dispatch({ type: LOGIN_SUCCESS, payload: data.response });
  } else {
    dispatch({ type: LOGIN_FAILED, payload: data });
  }
};
