import Vue from 'vue'
import Router from 'vue-router'
import BingoGame from '../components/bingo-game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bingo-game',
      component: BingoGame
    }
  ]
})
