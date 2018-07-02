<!-- 首页、排行榜  -->
<template>
  <div class="home">
     home 用使用子路由的话， 这里得加 <router-view/>
     初始化: vue init ./loader vue_demo2
  </div>
</template>

<script>
import fetch from '../api/fetch';

/* eslint-disable */
// this.$store.commit('accord', ['点击立即推广按钮', '点击立即推广按钮', '点击立即推广按钮']); commit 提交变化
// this.$store.dispatch('loadScript', {src: '', callback => () {} }); commit 提交变化
// https://vuex.vuejs.org/zh/api/#vuex-store-%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95
export default {
  name: 'rank',
  computed: {
    ...Vuex.mapState([
      'logArr',
    ]),
  },
  data() {
    return {
      defaultHead: 'http://static.live.nagezan.net/7d950b55-b827-4615-8a19-6e7cd61c5816.jpg',
      currentRouter: '/home', // 当前页面路由
    };
  },
  mounted() {},
  created() {
    this.getData();
  },
  methods: {
    getUserInfo() {
      try {
        /* global JSHost */
        this.uid = JSON.parse(JSHost.getUserInfo()).uid;
        this.$store.state.uid = this.uid;
        this.logArr.push(`获取用户uid:- ${this.uid}`);
        if (this.uid) {
          this.getData(); // 拿首页用户推荐相关数据
        }
      } catch (e) {
        this.count += 1;
        if (this.count > 2) {
          // 提示拿不到uid, 退出页面后重试
          this.logArr.push('2次拿UID失败，放弃治疗...');
          this.showTip('当前软件版本过低，请升级最新的版本后再来参加本活动~', 4000);
          return;
        }
        console.log(e);
        this.logArr.push(`获取用户uid失败:- ${e}`);
        setTimeout(() => {
          this.getUserInfo();
        }, 2000);
      }
    },
    getData() {
      const data = {};
      this.uid = 14814072; // 测试使用
      const action = `p/details?uid=${this.uid}`;
      this.logArr.push(`getData:-action: ${action}`);
      fetch.get(action, {
        data,
        callback: (res) => {
          console.log(res);
          if (res.errno === 0) {}
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang = "scss">
  @import "../assets/css/function.scss";
  .home {
    font-size: rem(28);
    color: #000;
    .test-css {
      width: rem(750);
      height: rem(202);
      padding:  rem(40);
      /* background: url($picUrl + 'home_top.jpg') no-repeat 0 0; */
      /* background-size: 100%; */
    }
  }
</style>
