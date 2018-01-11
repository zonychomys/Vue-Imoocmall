<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <div>返回: {{ msg }}</div>
    <h1>Vue-Resource</h1>
    <button v-on:click="get">Get请求</button>
    <button v-on:click="post">Post请求</button>
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
      },error=>{
        this.msg = error;
      });
    },
    post() {
      this.$http.post('', {
        userId: 102
      }, {
        headers: {
          access_token: 'abc'
        }
      }).then(function(res) {
        this.msg = res.data;
      }, function(err) {
        this.msg = err;
      });
    },
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
