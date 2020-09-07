<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <a
              v-if="isFacilitator"
              href="/"
              class="nav-link active text-right"
              aria-current="page"
            >Vote</a>
            <a
              v-else
              href="/fff"
              class="nav-link active text-right"
              aria-current="page"
            >Facilitator</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Brand from "../molecules/Brand.vue"
import NavbarToggler from "../molecules/NavbarToggler.vue";

export default defineComponent({
  components: {
    Brand,
    NavbarToggler,
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  computed: {
    isFacilitator(): boolean {
      return this.msg === "Facilitator";
    },
  },
});
</script>
