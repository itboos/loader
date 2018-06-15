// 配置
const envir = 'test';

let CONFIG = {};
const configMap = {
  test: {
    host: '//116.62.28.97:9980', // 测试java接口
    ohost: {
      chost: '',  // c++ 接口
    },
  },
  online: {
    host: '//120.27.155.43:9228', // java接口
    ohost: {
      chost: ' ',  // c++ 接口
    },
  }
};

CONFIG = configMap[envir];

module.exports = CONFIG;
