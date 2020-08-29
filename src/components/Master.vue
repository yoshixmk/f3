<template>
  <UserInfo :users="users" />
  <button @click="isShowTime = !isShowTime">IT'S SHOWTIME !!</button>
  <p  v-if="isShowTime"><b>Result</b></p>
</template>

<script>
import axios from "axios";
import UserInfo from "./UserInfo.vue";

export default {
  name: "Master",
  components: {
    UserInfo,
  },
  props: ['users'],
  data() {
    return {
      isShowTime: false,
    };
  },
  // computed: {
  // }
};
</script>
