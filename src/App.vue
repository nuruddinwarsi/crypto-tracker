<template>
  <div id="app">
    <AppNavbar id="navbar"></AppNavbar>
    <RouterView id="main"></RouterView>
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
#navbar {
  grid-area: navbar;
  align-self: end;
}

#main {
  grid-area: body;
  color: white;
  overflow-y: scroll;
  margin: 0 16px;
}
@media only screen and (min-width: 500px) {
  #app {
    grid-template-columns: 0.1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'navbar body';
  }
}
</style>
