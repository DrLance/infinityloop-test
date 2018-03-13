import axios from 'axios';

INIT_STATE = {
  isLogin: false
};

URL_API = 'https://infinityloop.com/api.php';

axios.defaults.baseURL = URL_API;

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
  });
  
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };

  let dataF = new FormData();

  dataF.append('module', 'register');
  dataF.append('method', 'send');
  dataF.append('email', 0);
  dataF.append('password', 0);

  const { data } = await axios({
    method: 'send',
    url: URL_API
  });
  */

  const logObj = {
    password: '1',
    email: 'drlance@Mail.ru',
    language: 'ru'
  };
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };

  let dataF = new FormData();
  dataF.append(JSON.stringify(logObj));

  const data = await axios.post('?module=login', dataF, config);
  console.log(data);
};
