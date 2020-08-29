<template>
  <h3 class="mb-0 p-4">Voted user: {{ userNames }}</h3>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfo",
  props: ['users'],
  data() {
    return {
    };
  },
  computed: {
    userNames() {
      return this.users.map(u => u.name).join(", ")
    }
  }
};
</script>
