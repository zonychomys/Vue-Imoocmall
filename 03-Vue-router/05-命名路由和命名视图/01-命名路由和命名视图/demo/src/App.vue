<template>
  <div id="app">
    <router-view class="top" name="NavBar"></router-view>
    <router-view class="main"></router-view>
    <router-view class="left" name="SlideBar"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  float: right;
  width: 1600px;
}
.top {
  width: 1920px;
  height: 80px;
  background: green;
}
.left {
  float: left;
  width: 200px;
  height: 865px;
  background: red;
}
</style>
