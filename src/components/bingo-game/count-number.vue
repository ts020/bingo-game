<template>
  <div class="count-number">
    <div class="first typo">{{first}}</div>
    <div class="second typo">{{second}}</div>
  </div>
</template>
<style scoped>
  .count-number {
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>
<script>
  export default {
    name: 'count-number',
    props: { value: { type: Number, default: 0 } },
    computed: {
      first () {
        if (this.value < 10) {
          return 0
        }
        return parseInt(this.value.toString().slice(0, 1), 10)
      },
      second () {
        if (this.value < 10) {
          return this.value
        }
        return parseInt(this.value.toString().slice(1, 2), 10)
      }
    }
  }
</script>
