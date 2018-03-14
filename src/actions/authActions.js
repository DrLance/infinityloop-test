import axios from 'axios';

import {LOGIN_FAILED,LOGIN_SUCCESS} from './types';

INIT_STATE = {
  isLogin: false
};

URL_API = 'https://infinityloop.com/api.php';

axios.defaults.baseURL = URL_API;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export const register = async (email, password, name, dateBirth) => {
  /*const { data } = await axios.post(URL_API, {
    module: 'register',
    method: 'send',
    gmt: 0,
    sex: 1,
    country: 0,
    city: 0,
    email: 'drlance@mail.ru',
    password: '1',
    firstname: 'Test',
    lastname: 'Test'
  });*/
  
 
  let dataF = new FormData();
  dataF.append('email', 'botlance@mail.ru');
  dataF.append('password', '1');
  dataF.append('language', 'ru');

  const data = await axios.post('?act=login', dataF, { withCredentials: true });

  console.log(data);
};

export const logOut = async () => {
  let dataF = new FormData();
  dataF.append('module', 'profile');
  dataF.append('method', 'get');

  const data = await axios({
    method: 'post',
    data: dataF,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Cookie: ''
    },
    withCredentials: true
  });

  console.log(data);
};

export const login = async (email, password, language = 'ru') => dispatch => {  
  
  let dataF = new FormData();
  dataF.append('email', email);
  dataF.append('password', password);
  dataF.append('language', language);

  const data = await axios.post('?act=login', dataF, { withCredentials: true });

  console.log(data);
};