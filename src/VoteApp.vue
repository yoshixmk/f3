<template>
  <vote-template />
</template>

<script lang="ts">
import VoteTemplate from "./components/templates/VoteTemplate.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    VoteTemplate,
  },
});
</script>

<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
  background-color: rgb(31, 36, 43);
  color: rgb(80, 110, 124);
  overflow: hidden;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
