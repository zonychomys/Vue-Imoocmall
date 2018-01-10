<template>
  <div>
    <p>首页</p>
    <router-link to="/product">显示产品页</router-link>
    <router-link to="/order">显示订单页</router-link>
    <router-view></router-view>
    <div>
      <router-link to="/cart">router-link 跳转至购物车产品页面</router-link>
    </div>
    <div>
      <button v-on:click="jumpCartByPathStr">使用路径字符串跳转至购物车产品页面</button>
    </div>
    <div>
      <button v-on:click="jumpCartByPathObj">使用路径对象跳转至购物车产品页面</button>
    </div>
    <div>
      <button v-on:click="goStep(-2)">回退2步</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumpCartByPathStr() {
      this.$router.push('/cart?id=123');
    },
    jumpCartByPathObj() {
      this.$router.push({path:'/cart?id=123'});
    },
    goStep(step) {
      this.$router.go(step);
    }
  }
}
</script>
