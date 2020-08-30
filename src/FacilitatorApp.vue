<template>
  <Navbar msg="Facilitator" />
  <Vote />
  <Facilitator :users="users" />
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import Vote from "./components/Vote.vue";
import Facilitator from "./components/Facilitator.vue";

export default {
  name: "FacilitatorApp",
  components: {
    Navbar,
    Vote,
    Facilitator,
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
