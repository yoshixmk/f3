<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark TopLayer">
    <div class="container-fluid">
      <brand :msg="msg" />
      <navbar-toggler>
        <span class="navbar-toggler-icon" />
      </navbar-toggler>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nav-link
              v-if="isFacilitator"
              href="/"
              class="text-right"
            >
              Vote
            </nav-link>
            <nav-link
              v-else
              href="/fff"
              class="text-right"
            >
              Facilitator
            </nav-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Brand from "../molecules/Brand.vue"
import NavbarToggler from "../molecules/NavbarToggler.vue";
import NavLink from "../atoms/NavLink.vue"

export default defineComponent({
  components: {
    Brand,
    NavbarToggler,
    NavLink,
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const isFacilitator = computed(() => props.msg === "Facilitator")
    return {
      isFacilitator
    }
  },
});
</script>

<style scoped lang="scss">
.TopLayer {
  z-index: 1
}
</style>
