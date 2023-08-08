<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>
