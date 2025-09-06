<script setup>
import ControlPanel from "./components/ControlPanel.vue";
</script>

<template>
  <div>
    <a href="https://mesh7.github.io/autocue/" target="_blank">
      <img src="/public/autocue-logo.JPG" class="logo" alt="Autocue logo" />
    </a>
  </div>

  <ControlPanel msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 3rem;
  padding: 0.25em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
