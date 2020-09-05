<template>
  <h4 class="mb-0 p-4">
    <span
      v-for="(finger, i) in fingers"
      :key="{i}"
      class="badge rounded-pill bg-light text-dark ml-1 font-weight-normal"
    >{{ finger.name }}</span>
    <br>
    {{ fingers.length }} voted users
  </h4>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Fingers } from "../../domains/fingers";

export default defineComponent({
  props: {
    fingers: {
      type: Object as PropType<Fingers | undefined>,
    },
  },
});
</script>
