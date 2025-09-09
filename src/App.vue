<script setup></script>

<template>
  <main>
    <RouterView />
  </main>
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
