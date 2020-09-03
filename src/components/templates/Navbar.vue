<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/images/finger5.png" class="bg-white" width="30" height="30" alt="" loading="lazy">
        Fist to Five / <span class="text-info">{{ msg }}</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="/" v-if="isFacilitator" class="nav-link active text-right" aria-current="page">Vote</a>
            <a href="/fff" v-else class="nav-link active text-right" aria-current="page">Facilitator</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    msg: String,
  },
  computed: {
    isFacilitator(): Boolean {
      return this.msg === "Facilitator";
    },
  },
};
</script>
