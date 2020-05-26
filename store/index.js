import vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new vuex.Store({
    state: {
      loadData: []
    },
    mutations: {
      setPostState(state, posts) {
        state.loadData = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-test-cc969.firebaseio.com/posts.json').then(res => {
          const data = []
          for (const key in res.data) {
            data.push({ ...res.data[key], id: key })
          }
          vuexContext.commit('setPostState', data)
        }).catch(e => context.error(e))
      }
    },
    getters: {
      getAllPosts(state) {
        return state.loadData
      }
    }
  })
}
export default createStore