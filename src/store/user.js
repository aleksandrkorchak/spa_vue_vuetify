import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      console.log(payload)
      state.user = payload
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
      // .then(user => {
      //   commit('setUser', new User(user.uid))
      //   commit('setLoading', false)
      // })
      // .catch(error => {
      //   commit('setLoading', false)
      //   commit('setError', error.message)
      // })
    },
    loginUser ({ commit, getters }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)

      fb.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log('auth promise is ' + user.uid)
          commit('setUser', new User(user.uid))
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error.message)
        })
    },

    autoLoginUser ({ commit }, payload) {
      commit('setUser', new User(payload.uid))
    },

    logoutUser ({ commit }) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      console.log('I am getter user. state.user is ' + state.user)
      return state.user
    },
    isUserLoggedIn (state) {
      return state.user !== null
    }
  }
}
