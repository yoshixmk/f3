<template>
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
});
</script>
