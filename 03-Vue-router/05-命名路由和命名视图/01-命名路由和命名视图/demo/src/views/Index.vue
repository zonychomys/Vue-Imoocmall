<template>
  <div>
    <p>首页</p>
    <div>
      <router-link v-bind:to="{name:'Cart',params:{id:123}}">router-link 跳转至购物车产品页面</router-link>
    </div>
  </div>
</template>
