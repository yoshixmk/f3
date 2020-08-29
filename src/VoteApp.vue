<template>
  <Vote msg="F3" />
  <user-info :users="users" />
</template>

<script>
import axios from "axios";
import Vote from "./components/Vote.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  name: "VoteApp",
  components: {
    Vote,
    UserInfo,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    setInterval(() => {
      this.updateFingersInfo();
    }, 1000);
  },
  methods: {
    updateFingersInfo() {
      axios
        .get(import.meta.env.VITE_BASE_URL + "/fingers")
        .then((response) => (this.users = response.data));
    },
  },
};
</script>
