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
