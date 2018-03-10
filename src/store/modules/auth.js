import AES from 'crypto-js/aes'
import crypto from 'crypto-js'
window.aes = AES
window.crypto2 = crypto
const LOCAL_STORAGE_KEY = 'eseed'

function getSeedFromLocalStorage () {
  if (localStorage.hasOwnProperty(LOCAL_STORAGE_KEY)) {
    return localStorage.getItem(LOCAL_STORAGE_KEY)
  }

  return null
}

function setSeedOnLocalStorage (encryptedSeed) {
  localStorage.setItem(LOCAL_STORAGE_KEY, encryptedSeed)
}

function clearSeedFromLocalStorage () {
  localStorage.removeItem(LOCAL_STORAGE_KEY)
}

export default {
  namespaced: true,
  state: {
    encryptedSeed: getSeedFromLocalStorage(),
    seed: null
  },
  mutations: {
    setSeed (state, {encryptedSeed, remember}) {
      const encryptedSeedString = encryptedSeed.toString()
      state.encryptedSeed = encryptedSeedString

      if (remember) {
        setSeedOnLocalStorage(encryptedSeedString)
      }
    },

    clear (state) {
      state.encryptedSeed = null
      clearSeedFromLocalStorage()
    }
  },
  actions: {
    setSeed ({commit}, { seed, secret, remember = false }) {
      const encryptedSeed = AES.encrypt(seed, secret)

      commit('setSeed', { encryptedSeed, remember })
    },
    forget ({commit}) {
      commit('clear')
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.encryptedSeed != null
    }
  }
}
