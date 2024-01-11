<template>
    <div class="flex">
      <input
        :v-model="text"
        :type="type"
        :placeholder="placeholder"
        :class="class"
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
    default: text,
  },
  placeholder: {
    type: String,
    default: text,
  },
  class: {
    type: String,
  },
});
  </script>
  