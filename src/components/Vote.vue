<template>
  <h1>{{ msg }}</h1>
  <img alt="Finger image" height="300" :src="`/images/finger${fingerNumber()}.png`" />
  <br />
  <h2>My name is <b>{{ name }}.</b></h2>
  <input v-model="name" autofocus />
  <button @click="count++">count is: {{ fingerNumber() }}</button>
  <button @click="sendVote">Send</button>
  <p v-if="info" class="text-primary">{{ info }}</p>
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
      name: "",
      info: null,
      users: null
    };
  },
  methods: {
    fingerNumber() {
      return (this.count % 5) + 1;
    },
    sendVote() {
      axios
        .post(import.meta.env.VITE_BASE_URL + "/fingers", {
          "name": this.name,
          "value": this.fingerNumber(),
        })
        .then((response) => (this.info = response.data));
    },
  },
};
</script>
