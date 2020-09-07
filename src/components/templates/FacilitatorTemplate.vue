<template>
  <navbar msg="Facilitator" />
  <vote />
  <facilitator :fingers="fingers" />
</template>

<script lang="ts">
import axios from "axios";
import Navbar from "../organisms/Navbar.vue";
import Vote from "../organisms/Vote.vue";
import Facilitator from "../organisms/Facilitator.vue";
import { defineComponent } from "vue";

export default defineComponent({
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
        .get(process.env.API_URL || '' + "/v1/fingers")
        .then((response) => (this.fingers = response.data));
    },
  },
});
</script>
