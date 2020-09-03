import { createApp } from 'vue';
import store from './store';

import { h } from 'vue';

import VoteApp from './VoteApp.vue';
import FacilitatorApp from './FacilitatorApp.vue';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
  '/': VoteApp,
  '/fff': FacilitatorApp
}

export const router = {
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

createApp(router)
  .use(store)
  .mount('#app');
