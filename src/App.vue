<script setup>
import router from "./router";

const navigateToHomePage = () => {
  router.push("/");
};
</script>

<template>
  <div>
    <header class="pt-6 px-6 bg-white fixed top-0 left-0 right-0 z-50">
      <img
        src="./assets/logo_text.svg"
        alt="Logo"
        class="logo"
        @click="navigateToHomePage()"
      />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 2rem;
  padding: 0.25em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #4bdd78);
}
</style>
