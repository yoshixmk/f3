<template>
  <navbar msg="Vote" />
  <vote />
  <user-info :fingers="fingers" />
  <fish-stage />
</template>

<script lang="ts">
import axios from "axios";
import Navbar from "../organisms/Navbar.vue";
import Vote from "../organisms/Vote.vue";
import UserInfo from "../organisms/UserInfo.vue";
import FishStage from "../organisms/fishes/FishStage.vue";
import { Fingers } from "../../domains/fingers";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navbar,
    Vote,
    UserInfo,
    FishStage,
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
        .get(process.env.API_URL || '' + "/v1/fingers")
        .then((response) => (this.fingers = response.data as Fingers));
    },
  },
});
</script>
