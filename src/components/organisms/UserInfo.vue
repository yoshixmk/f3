<template>
  <h4 class="mb-0 p-4">
    <span
      v-for="(finger, i) in fingers"
      :key="{i}"
      class="badge rounded-pill bg-light text-dark ml-1 font-weight-normal"
      role="button"
      @mouseover="isHover=true"
      @mouseleave="isHover=false"
    >{{ finger.name }}
      <span
        v-if="enableHover && isHover"
        style="color: deeppink;"
      >{{ finger.value }}</span>
    </span>
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
      default: [],
    },
    enableHover: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return { isHover: false }
  }
});
</script>
