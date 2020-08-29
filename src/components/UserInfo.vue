<template>
  <p>Voted user: {{ userNames }}</p>
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
