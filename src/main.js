import { h, createApp } from 'vue'
import VoteApp from './VoteApp.vue'
import FacilitatorApp from './FacilitatorApp.vue'
import 'popper.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
  '/': VoteApp,
  '/fff': FacilitatorApp
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
