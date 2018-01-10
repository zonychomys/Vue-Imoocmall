<template>
  <div>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
    <p>{{ num }}</p>
  </div>
</template>

<style></style>

<script>
export default {
  props: ['num'],
  methods: {
    increment() {
      this.$emit('incre');
    },
    decrement() {
      this.$emit('decre');
    }
  }
}
</script>
