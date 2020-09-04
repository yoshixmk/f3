<template>
  <Navbar msg="Vote" />
  <Vote />
  <user-info :fingers="fingers" />
</template>

<script lang="ts">
import axios from "axios";
import Navbar from "./components/templates/Navbar.vue";
import Vote from "./components/templates/Vote.vue";
import UserInfo from "./components/templates/UserInfo.vue";

export default {
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
        .get(process.env.API_URL + "/v1/fingers")
        .then((response) => (this.fingers = response.data));
    },
  },
};
</script>
