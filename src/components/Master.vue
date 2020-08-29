<template>
  <UserInfo :users="users" />
  <button class="btn btn-primary" @click="isShowTime = !isShowTime">IT'S SHOWTIME !!</button>
  <p v-if="isShowTime">
    <b>Result</b>
  </p>
</template>

<script>
import axios from "axios";
import UserInfo from "./UserInfo.vue";

export default {
  name: "Master",
  components: {
    UserInfo,
  },
  props: ["users"],
  data() {
    return {
      isShowTime: false,
    };
  },
};
</script>
