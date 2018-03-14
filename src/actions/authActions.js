import axios from 'axios';

INIT_STATE = {
  isLogin: false
};

URL_API = 'https://infinityloop.com/api.php';

axios.defaults.baseURL = URL_API;
//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

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
    module: 'login',
    email: 'botlance@mail.ru',
    password: '1',
    language: 'ru'
  };

  let dataF = new FormData();
  dataF.append('email', 'botlance@mail.ru');
  dataF.append('password', '1');
  dataF.append('language', 'ru');
  dataF.append('module', 'login');

  const data = await axios.post(
    URL_API,
    {
      module: 'login',
      email: 'botlance@mail.ru',
      password: '1',
      language: 'ru'
    },
    { withCredentials: true }
  );

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
