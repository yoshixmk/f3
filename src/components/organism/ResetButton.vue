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
import axios from "axios";


export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    reset() {
      if (this.checked) {
        axios.delete(process.env.API_URL + "/v1/reset");
      }
    },
  },
};
</script>
