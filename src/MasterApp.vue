<template>
  <Vote msg="F3 Master Page" />
  <Master :users="users" />
</template>

<script>
import axios from "axios";
import Vote from "./components/Vote.vue";
import Master from "./components/Master.vue";

export default {
  name: "MasterApp",
  components: {
    Vote,
    Master,
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
