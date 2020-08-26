<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>From server: {{ info }}</p>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      info: null,
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_BASE_URL)
      .then((response) => (this.info = response.data));
  },
};
</script>
