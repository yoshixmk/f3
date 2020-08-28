<template>
  <h1>{{ msg }}</h1>
  <img alt="Vue logo" height="300" :src="`/images/finger${fingerNumber}.png`" />
  <br />
  <button @click="count++">count is: {{ fingerNumber }}</button>
  <p>From server: {{ info }}</p>
</template>

<script>
import axios from "axios";

export default {
  name: "Vote",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      info: null,
    };
  },
  computed: {
    fingerNumber() {
      return (this.count % 5) + 1;
    },
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_BASE_URL)
      .then((response) => (this.info = response.data));
  },
};
</script>
