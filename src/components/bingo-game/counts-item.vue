<template>
  <div class="counts-item" :is-over="isOver" :selected="selected">
    <count-number :value="number" ></count-number>
  </div>
</template>
<style scoped>
  .counts-item {
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    border: 1px solid ;
    color: #EB5757;
  }

  .counts-item[is-over] {
    background: rgba(235, 87, 87, 0.53);
    color: white;
    font-weight: 800;
  }

  .counts-item[selected] {
    background: #EB5757;
    color: white;
    font-weight: 800;
  }
</style>
<script>
  import CountNumber from './count-number.vue'
  export default {
    name: 'counts-item',
    props: { isOver: Boolean, value: Object },
    computed: {
      number () {
        return this.value.number
      },
      selected () {
        return this.value.selected
      }
    },
    components: {CountNumber}
  }
</script>
