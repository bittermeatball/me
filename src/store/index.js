/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'
import { camelCase } from 'lodash'
import { rootActions, rootMutations } from './enums'

Vue.use(Vuex)

const modules = {}

// See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
const requireModule = require.context('./', true, /^(?=.*index).*\.js$/ /* Every index.js file */)
requireModule.keys().forEach((fileName) => {
  // Ignore this root index.js file, this is not a module
  if (fileName === './index.js') return
  // If your module path is something/else, moduleName will be somethingElse
  const moduleName = camelCase(fileName.replace(/(\.\/|index.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  }
})

export const store = new Vuex.Store({
  state: {
    vueServerReady: false,
    options: {
      sidebarCollapse: true,
    }
  },
  mutations: {
    TOGGLE_SIDEBAR_COLLAPSE(state) {
      Vue.set(state.options, 'sidebarCollapse', !state.options.sidebarCollapse)
    },
    SET_SIDEBAR_COLLAPSE(state, sidebarCollapse) {
      Vue.set(state.options, 'sidebarCollapse', sidebarCollapse)
    },
    SET_VUE_SERVER_READY(state, vueServerReady) {
      Vue.set(state, 'vueServerReady', vueServerReady)
    },
  },
  actions: {
    vueServerInit({ rootState, commit }) {
      if (!rootState.vueServerReady) {
        commit(rootMutations.SET.VUE_SERVER_READY, true)
      }
    }
  },
  modules,
})

store.dispatch(rootActions.VUE_SERVER_INIT)

const initialStateCopy = JSON.parse(JSON.stringify(store.state))

export function resetVuexState () {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)))
}
