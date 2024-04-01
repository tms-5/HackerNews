import { createStore } from 'vuex'
import hackerNews from './modules/hackerNews'

export default new createStore({
  modules: {
    hackerNews
  }
})
