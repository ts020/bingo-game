<template>
  <div class="bingo-game" @click="clickBody()">
    <count-number class="count-number" :value="currentValue.number"></count-number>
    <counts ></counts>
  </div>
</template>
<style scoped>
  .bingo-game {
    margin: 16px;
    height: calc(100% - 32px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: calc(100% - 32px);
    box-sizing: border-box;
  }

  .count-number {
    font-size: 300px;
    font-weight: 100;
    color: #EB5757;
  }
</style>
<script>
  import countNumber from './bingo-game/count-number.vue'
  import counts from './bingo-game/counts.vue'
  import { createNamespacedHelpers } from 'vuex'
  const { mapActions, mapGetters } = createNamespacedHelpers('bingo')
  export default {
    name: 'bingo-game',
    components: { countNumber, counts },
    computed: {
      ...mapGetters(['currentValue'])
    },
    methods: {
      ...mapActions({
        clickBody: 'select'
      })
    }
  }
</script>
