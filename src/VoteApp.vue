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
import { Fingers } from "./domains/fingers";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navbar,
    Vote,
    UserInfo,
  },
  data() {
    return {
      fingers: [] as Fingers,
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
        .then((response) => (this.fingers = response.data as Fingers));
    },
  },
});
</script>
