<template>
  <div id="app">
    <div id="navbar">
      <AppNavbar></AppNavbar>
    </div>
    <div id="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>

<style></style>
