<template>
  <img
    :src="`/images/finger${fingerNumber()}.png`"
    class="pt-2"
    alt="Finger image"
    height="300"
  >
  <br>
  <h2>
    My name is
    <b>{{ state.name }}.</b>
  </h2>
  <div class="container">
    <div class="row container-sm">
      <div class="col-0 col-lg-3" />
      <input
        class="col-7 col-lg-4 m-1 TopLayer"
        :value="state.name"
        autofocus
        placeholder="Your name"
        @input="updateName($event.target.value)"
      >
      <button
        class="btn btn-outline-secondary col-2 col-lg-1 m-1 TopLayer"
        @click="countUp()"
        @keyup.right="countUp()"
        @keyup.up="countUp()"
        @keyup.left="countDown()"
        @keyup.down="countDown()"
        @keyup.1="initCount(1)"
        @keyup.2="initCount(2)"
        @keyup.3="initCount(3)"
        @keyup.4="initCount(4)"
        @keyup.5="initCount(5)"
        @keyup.0="initCount(0)"
      >
        Vote: {{ fingerNumber() }}
      </button>
      <button
        class="btn btn-outline-primary col-2 col-lg-1 m-1 TopLayer"
        :disabled="hasNotName()"
        @click="sendVote"
      >
        Send
      </button>
      <div class="col-0 col-lg-1" />
    </div>
    <div
      v-if="react.sent"
      class="d-flex justify-content-end fixed-bottom"
    >
      <Toast>
        Success sending.<br> You can overwrite using the same name again.
      </Toast>
    </div>
  </div>
</template>

<script lang="ts">
import Toast from "../molecules/Toast.vue";
import axios from "axios";
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { State } from "../../store";

export default defineComponent({
  components: { Toast },
  setup() {
    const { state, dispatch } = useStore<State>();

    const fingerNumber = () => {
      return (state.count % 5) + 1;
    };
    const react = reactive({ sent: false })
    const sendVote = () => {
      axios
        .post(process.env.API_URL || '' + "/v1/fingers", {
          name: state.name,
          value: fingerNumber(),
        })
      react.sent = true;
      setTimeout(() => react.sent = false, 3000);
    };
    const initCount = (num: number) => {
      dispatch("onSetCount", num - 1);
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
      react,
    };
  },
});
</script>

<style scoped lang="scss">
.TopLayer {
  z-index: 1
}
</style>
