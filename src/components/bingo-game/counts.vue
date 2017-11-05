<template>
  <div class="counts">
    <div class="top">
      <counts-item :key="value.index" v-for="value in topCounts" :isOver="value.index === focusIndex" :value="value"></counts-item>
    </div>
    <div class="right">
      <counts-item :key="value.index" v-for="value in rightCounts" :isOver="value.index === focusIndex" :value="value"></counts-item>
    </div>
    <div class="bottom">
      <counts-item :key="value.index" v-for="value in bottomCounts" :isOver="value.index === focusIndex" :value="value"></counts-item>
    </div>
    <div class="left">
      <counts-item :key="value.index" v-for="value in leftCounts" :isOver="value.index === focusIndex" :value="value"></counts-item>
    </div>
  </div>
</template>
<style scoped>
  .counts {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-weight: 300;
    letter-spacing: -1px;
  }

  .top {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right {
    position: absolute;
    right: 0;
    top: 70px;
    bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .left {
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 70px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
  }
</style>
<script>
  import countsItem from './counts-item.vue'
  import { createNamespacedHelpers } from 'vuex'
  const { mapState } = createNamespacedHelpers('bingo')
  export default {
    name: 'counts',
    components: { countsItem },
    computed: {
      ...mapState({
        focusIndex (state) {
          return state.focusIndex
        },
        topCounts (state) {
          return state.counts.slice(0, 26)
        },
        rightCounts (state) {
          return state.counts.slice(26, 38)
        },
        bottomCounts (state) {
          return state.counts.slice(38, 63)
        },
        leftCounts (state) {
          return state.counts.slice(63, 75)
        }
      })
    }
  }
</script>
