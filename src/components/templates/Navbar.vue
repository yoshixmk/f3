<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="/"
      >
        <img
          src="/images/finger5.png"
          class="bg-white"
          width="30"
          height="30"
          alt
          loading="lazy"
        >
        Fist to Five /
        <span class="text-info">{{ msg }}</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
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

export default defineComponent({
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
