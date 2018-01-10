<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--
      - v-bind绑定num属性, 用于向子组件传递数据(能够传递的数据定义在子组件的props属性中)
      - v-on绑定由子组件触发的自定义事件(incre/decre), 事件触发后执行父组件中对应的方法(increment/decrement)
    -->
    <counter v-bind:num="num" v-on:incre="increment" v-on:decre="decrement"></counter>
    <p>parent: {{ num }}</p>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 10
    }
  },
  components: {
    Counter
  },
  methods: {
    increment() {
      this.num++;
    },
    decrement() {
      this.num--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
