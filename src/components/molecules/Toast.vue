<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header bg-primary">
      <strong class="me-auto text-white">Notice</strong>
    </div>
    <div class="toast-body">
      <slot />
    </div>
  </div>
</template>
