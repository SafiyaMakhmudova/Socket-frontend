<template>
    <div class="flex">
      <input
        :type="type"
        :placeholder="placeholder"
        :class="class"
        @input="$emit('update:modelValue', $event.target.value)"
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
  placeholder: {
    type: String,
  },
  class: {
    type: String,
  }, 
  modelValue: {
    type: String,
    required: true,
  },
});
  </script>
  