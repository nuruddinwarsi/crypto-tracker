<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <RouterView></RouterView>
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

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

* {
  font-family: 'Chivo', sans-serif;
}

#app {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas:
    'body'
    'navbar';
  background: #121212;
}

@media only screen and (min-width: 500px) {
  #app {
    grid-template-rows: auto;
    grid-template-areas: 'navbar body';
  }
}
</style>
