<template>
  <user-info :fingers="fingers" />
  <result-bar-chart
    :fingers="fingers"
  />
  <br>
  <reset-button />
</template>

<script lang="ts">
import UserInfo from "./UserInfo.vue";
import ResultBarChart from "../organism/ResultBarChart.vue";
import ResetButton from "../organism/ResetButton.vue";
import { Fingers } from "../../domains/fingers";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: {
    UserInfo,
    ResetButton,
    ResultBarChart,
  },
  props: {
    fingers: {
      type: Object as PropType<Fingers>,
      default: [],
    },
  },
});
</script>
