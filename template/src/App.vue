<template>
  <div id="app">
    {{#unless vuex}}
    <h1 style="font-size: 30px; text-align: center">no vuex</h1>
    {{/unless}}
    {{#vuex}}
    <h1 style="font-size: 30px; text-align: center">\{{msg}}</h1>
    <h1 style="font-size: 30px; text-align: center">\{{getterMsg}}</h1>
    {{/vuex}}
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
    <div class="log-area" v-if = 'false && logShow'>
      <p v-for = '(item, index) in logArr' :key="index">{{ item }}</p>
    </div>
    <wxWxShare />
  </div>
</template>

<script>
  {{#unless router}}
  import HelloWorld from './components/HelloWorld';
  {{/unless}}
  import wxWxShare from '@/components/wxShare';

  export default {
    name: 'app'{{#router}}{{else}},
    components: {
      HelloWorld,
    }{{/router}},
    computed: {
      {{#vuex}}
      ...Vuex.mapState([
        'msg',
      ]),
      ...Vuex.mapGetters([
        'getterMsg',
        'getDemoDesc'
      ])
      {{/vuex}}
    },
    components: {
      wxWxShare,
    },
    mounted() {
      {{#vuex}}
      console.log(this.getDemoDesc(1));
      {{/vuex}}
    }
  };
</script>

<style lang="scss">
  @import "assets/css/base.scss";
  @import "assets/css/init.scss";
  @import "assets/css/function.scss";
  .log-area {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, .6);
    font-size: 12px;
    color: #fff;
    overflow: auto;
    > p {
      margin: 4px auto;
      text-align: left;
    }
  }
</style>
