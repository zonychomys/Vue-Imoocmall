<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <div>返回: {{ msg }}</div>
    <h1>Vue-Axios</h1>
    <button v-on:click="get">Get请求</button>
    <button v-on:click="post">Post请求</button>
    <button v-on:click="http">http请求</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: ''
    }
  },
  mounted: function() {
    // 全局拦截器interceptors, 用于拦截全局的请求, 在请求发送前以及响应处理前执行某些自定义操作
    this.$http.interceptors.request.use(function(config) {
      console.log('request init...');
      return config
    });
    this.$http.interceptors.response.use(function(response) {
      console.log('response init...');
      return response
    })
  },
  methods: {
    get() {
      this.$http.get('', {
        params: {
          wd:'sads'
        },
        headers:{
          token: 'abc'
        }
      }).then(res=>{
        this.msg = res.data;
      }).catch(err=>{
        this.msg = err;
      });
    },
    post() {
      this.$http.post('', {
        userId: 102
      }, {
        headers: {
          access_token: 'abc'
        }
      }).then(res=>{
        this.msg = res.data;
      }).catch(err=>{
        this.msg = err;
      });
    },
    http() {
      this.$http({
        url: '',
        method: 'get',
        params: {
          userId: '123',
        },
        /* post方法使用data参数传递数据
        method: 'post',
        data: {
          userId: '123',
        },
        */
        data: {
          userId: '123',
        },
        headers: {
          token: 'xxx'
        }
      }).then(res=>{
        console.log('get response');
        this.msg = res.data;
      }).catch(err=>{
        this.msg = err;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
