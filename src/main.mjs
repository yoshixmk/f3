import { createApp, h } from "vue";
import store from "./store";

import VoteApp from "./VoteApp.vue";
import FacilitatorApp from "./FacilitatorApp.vue";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { axiosPlugin } from "./plugins/useAxios";

const NotFoundComponent = { template: "<p>Page not found</p>" };

const routes = {
  "/": VoteApp,
  "/fff": FacilitatorApp,
};

export const router = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent;
    },
  },

  render() {
    return h(this.CurrentComponent);
  },
};

createApp(router).use(store).use(axiosPlugin).mount("#app");
