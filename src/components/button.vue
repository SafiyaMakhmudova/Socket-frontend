<template>
    <div class="flex">
      <button
        :icon="icon?.length ? icon : ''"
        :color="color"
        :class="class"
      >
        <slot />
      </button>
     </div>
  </template>
  
<script setup >
  defineProps({
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
  
  class: {
    type: String,
  },
});
  </script>
  