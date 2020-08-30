<template>
  <Navbar msg="Facilitator" />
  <Vote />
  <Facilitator :fingers="fingers" />
</template>

<script lang="ts">
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import Vote from "./components/Vote.vue";
import Facilitator from "./components/Facilitator.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FacilitatorApp",
  components: {
    Navbar,
    Vote,
    Facilitator,
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
});
</script>
