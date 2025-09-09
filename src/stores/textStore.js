import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTextStore = defineStore("textStore", () => {
  // State
  const telepromptorText = ref("");

  // Getters
  const getTelepromptorText = computed(() => telepromptorText.value);

  // Actions
  function updateText(textValue) {
    telepromptorText.value = textValue;
  }

  return {
    telepromptorText,
    getTelepromptorText,
    updateText,
  };
});
