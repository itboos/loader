import config from './config';

let url = '';
// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求';
        break;
      default:
    }
  }
});

// axios.defaults.baseURL = '/api';
// 设置默认请求头
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest'
// }
axios.defaults.timeout = 5000;

export default {
  get(path, param) {
    if (param.host) {
      url = `${param.host}/${path}`;
    } else if (param.ohost) {
      url = `${config.ohost[param.ohost]}/${path}`;
    } else {
      url = `${config.host}/${path}`;
    }
    axios({
      method: 'get',
      url,
      headers: param.headers || { 'content-type': 'application/json' }, // { 'content-type': 'application/x-www-form-urlencoded' },  'text/plain',
      params: param.data,
    }).then(res => {
      param.callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  post(path, param) {
    if (param.host) {
      url = `${param.host}/${path}`;
    } else if (param.ohost) {
      url = `${config.ohost[param.ohost]}/${path}`;
    } else {
      url = `${config.host}/${path}`;
    }
    axios({
      method: 'post',
      url,
      headers: param.headers || { 'content-type': 'application/x-www-form-urlencoded' },
      params: param.data,
    }).then(res => {
      // 这里可以做全局登录失败的判断
      param.callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },
};
