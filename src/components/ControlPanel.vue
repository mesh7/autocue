<script setup>
import { ref } from "vue";

import Card from "primevue/card";
import Button from "primevue/button";
import Slider from "primevue/slider";
import InputText from "primevue/inputtext";

const value = ref(50);

const playClicked = () => {
  console.log("Play clicked");
};
const recordAudio = () => {
  console.log("Record audio clicked");
};
</script>

<template>
  <Card
    class="w-xl bg-white/30 backdrop-blur-lg rounded-xl p-6 border border-white/40"
  >
    <template #content>
      <div class="flex gap-4 justify-center">
        <Button
          icon="pi pi-play"
          severity="success"
          rounded
          aria-label="Play"
          @click="playClicked()"
        />
        <Button icon="pi pi-pause" severity="info" rounded aria-label="Pause" />
        <Button
          icon="pi pi-microphone"
          severity="danger"
          rounded
          aria-label="Microphone"
          @click="recordAudio()"
        />
      </div>
      <div class="flex gap-8 justify-center mt-4">
        <div class="w-56">
          <InputText v-model.number="value" class="w-full mb-4" />
          <Slider v-model="value" class="w-full" />
        </div>
        <div class="w-56">
          <InputText v-model.number="value" class="w-full mb-4" />
          <Slider v-model="value" class="w-full" />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
