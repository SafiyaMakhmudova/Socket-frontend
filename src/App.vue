<script setup>
import AppLayout from "./layouts/AppLayout.vue";
import Login from "./views/Login.vue"
</script>

<template>
  <Login/>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>
