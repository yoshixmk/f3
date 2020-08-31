<template>
  <input type="checkbox" v-model="checked" class="m-1" />
  <button :disabled="!checked" class="btn btn-warning btn-sm m-1" @click="reset()">Reset</button>
</template>

<script lang="ts">
import axios from "axios";


export default {
  name: "ResetButton",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    reset() {
      if (this.checked) {
        axios.delete(import.meta.env.VITE_BASE_URL + "/v1/reset");
      }
    },
  },
};
</script>
