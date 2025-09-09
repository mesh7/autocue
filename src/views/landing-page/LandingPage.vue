<script setup>
import Button from "primevue/button";
</script>

<template>
  <section class="min-h-screen flex items-center justify-center px-6">
    <div
      class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <!-- Text Content -->
      <div class="space-y-6">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          <span class="text-black">Read seemlessly using</span>
          <span class="text-green-600 block">Autocue</span>
        </h1>
        <h6 class="mb-4 text-2xl font-extrabold text-gray-500 dark:text-white">
          The Timeless Language of Signals
        </h6>
        <p class="mt-6 text-lg text-gray-900 dark:text-white">
          Whether you're delivering a speech, recording a video, or practicing a
          presentation, our online teleprompter helps you stay focused and
          confident. No more fumbling with notes or losing your place—just
          smooth, readable scrolling text right in your browser.
        </p>
        <Button
          label="Get started"
          icon="pi pi-play"
          severity="success"
          aria-label="Play"
          @click="getStarted()"
        />
      </div>

      <!-- Image -->
      <div>
        <img
          src="/src/assets/dummy.svg"
          alt="Hero Image"
          class="w-full rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
</template>
