<template>
  <Navbar msg="Vote" />
  <Vote />
  <user-info :fingers="fingers" />
</template>

<script lang="ts">
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import Vote from "./components/Vote.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  name: "VoteApp",
  components: {
    Navbar,
    Vote,
    UserInfo,
  },
  data() {
    return {
      fingers: [],
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
        .then((response) => (this.fingers = response.data));
    },
  },
};
</script>
