<template>
  <input
    v-model="checked"
    type="checkbox"
    class="m-1"
  >
  <button
    :disabled="!checked"
    class="btn btn-warning btn-sm m-1"
    @click="reset()"
  >
    Reset
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {useAxios} from "../../plugins/useAxios";

export default defineComponent({
  setup() {
    const axios = useAxios()
    const checked = ref<boolean>(false)
    const reset = async () => {
      if (checked.value) {
        await axios.delete("/v1/reset")
      }
    }
    return {
      checked,
      reset
    }
  },
});
</script>
