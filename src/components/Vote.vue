<template>
  <img :src="`/images/finger${fingerNumber()}.png`" class="pt-2" alt="Finger image" height="300" />
  <br />
  <h2>
    My name is
    <b>{{ name }}.</b>
  </h2>
  <div class="container">
    <div class="row container-sm">
      <div class="col-0 col-lg-3" />
      <input class="col-7 col-lg-4 m-1" v-model="name" autofocus placeholder="Your name" />
      <button
        @click="countUp()"
        v-on:keyup.right="countUp()"
        v-on:keyup.up="countUp()"
        v-on:keyup.left="countDown()"
        v-on:keyup.down="countDown()"
        v-on:keyup.1="initCount(1)"
        v-on:keyup.2="initCount(2)"
        v-on:keyup.3="initCount(3)"
        v-on:keyup.4="initCount(4)"
        v-on:keyup.5="initCount(5)"
        v-on:keyup.0="initCount(0)"
        class="btn btn-outline-secondary col-2 col-lg-1 m-1"
      >Vote: {{ fingerNumber() }}</button>
      <button
        @click="sendVote"
        class="btn btn-outline-primary col-2 col-lg-1 m-1"
        :disabled="hasNotName"
      >Send</button>
      <div class="col-0 col-lg-1" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Vote",
  data() {
    return {
      count: 0,
      name: "",
      users: null,
    };
  },
  computed: {
    hasNotName() {
      const target: string = this.name;
      return /^\s*$/g.test(target);
    },
  },
  methods: {
    fingerNumber() {
      return (this.count % 5) + 1;
    },
    sendVote() {
      axios
        .post(import.meta.env.VITE_BASE_URL + "/fingers", {
          name: this.name,
          value: this.fingerNumber(),
        })
        .then((response) => (console.info(response.data)));
    },
    initCount(num: number) {
      this.count = num - 1;
    },
    countUp() {
      this.count++;
    },
    countDown() {
      if (this.count <= 0) {
        this.count = 4;
        return;
      }
      this.count--;
    },
  },
});
</script>
