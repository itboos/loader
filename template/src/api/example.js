import fetch from '../api/fetch';

const data = {
 // 接口自定义参数
};
fetch.get('v1/h5/weekly_send_top.json', {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  data,
  callback: (res) => {
    console.log(res);
  },
 });