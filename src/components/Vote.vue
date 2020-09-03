<template>
  <img :src="`/images/finger${fingerNumber()}.png`" class="pt-2" alt="Finger image" height="300" />
  <br />
  <h2>
    My name is
    <b>{{ state.name }}.</b>
  </h2>
  <div class="container">
    <div class="row container-sm">
      <div class="col-0 col-lg-3" />
      <input
        class="col-7 col-lg-4 m-1"
        :value="state.name"
        @input="updateName($event.target.value)"
        autofocus
        placeholder="Your name"
      />
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
        :disabled="hasNotName()"
      >Send</button>
      <div class="col-0 col-lg-1" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { State } from "../store";

export default defineComponent({
  setup() {
    const { state, dispatch } = useStore<State>();

    const fingerNumber = () => {
      return (state.count % 5) + 1;
    };
    const sendVote = () => {
      axios
        .post(import.meta.env.VITE_BASE_URL + "/v1/fingers", {
          name: state.name,
          value: fingerNumber(),
        })
        .then((response) => console.info(response.data));
    };
    const initCount = (num: number) => {
      dispatch("onSetCount", num - 1);
      console.log(state.count);
    };
    const countUp = () => {
      dispatch("onIncrement");
    };
    const countDown = () => {
      dispatch("onDecrement");
    };
    const updateName = (name: string) => {
      dispatch("onSetName", name);
    };
    const hasNotName = () => {
      return /^\s*$/g.test(state.name);
    };
    return {
      state,
      fingerNumber,
      sendVote,
      initCount,
      countUp,
      countDown,
      updateName,
      hasNotName,
    };
  },
});
</script>
