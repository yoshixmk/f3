<template>
  <a
    :href="href"
    class="nav-link active"
    aria-current="page"
  >
    <slot />
  </a>
</template>

<script>
import {defineComponent} from "vue"
export default defineComponent({
name: "NavLink",
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
