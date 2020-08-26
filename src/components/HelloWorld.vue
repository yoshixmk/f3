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
import * as dotenv from 'dotenv';
import axios from "axios";

dotenv.config();
const url = process.env.BASE_URL

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
      .get(url)
      .then((response) => (this.info = response.data));
  },
};
</script>
