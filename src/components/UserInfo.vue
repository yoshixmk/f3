<template>
  <h3 class="mb-0 p-4">Voted user: {{ userNames }}</h3>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Fingers, Finger } from "../domains/fingers";

export default defineComponent({
  name: "UserInfo",
  props: {
    fingers: {
      type: Object as PropType<Fingers | undefined>,
    },
  },
  data() {
    return {};
  },
  computed: {
    userNames(): string | undefined {
      return this.fingers?.map((u: Finger) => u.name)?.join(", ");
    },
  },
});
</script>
