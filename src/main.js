import { h, createApp } from 'vue'
import VoteApp from './VoteApp.vue'
import MasterApp from './MasterApp.vue'
import './index.css'

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
  '/': VoteApp,
  '/fff': MasterApp
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')
