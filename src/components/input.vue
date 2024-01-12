<template>
    <div class="flex">
      <input
        :type="type"
        :placeholder="placeholder"
        :class="class"
        :v-model="text"
      />
        <slot />
     </div>
  </template>
  
  <script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  text: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  class: {
    type: String,
  },
});
  </script>
  