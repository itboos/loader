/* eslint-disabled */
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

 const data = {

 };
 
 fetch.get(action, {
  data,
  callback: (res) => {
    console.log(res);
    if (res.errno === 0) {
      // 处理
    }
  });

  fetch.post('p/binding', {
    headers: { 'content-type': 'application/json' },
    data,
    callback: (res) => {
      console.log(res);
      if (res.errno === 0) {
      } else {
        this.showTip(res.desc, 1500);
      }
    },
  });