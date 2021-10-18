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

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

* {
  font-family: 'Chivo', sans-serif;
}

#app {
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr;
  grid-template-areas:
    'body'
    'navbar';
  background: #121212;
}

#main-content {
  grid-area: body;
  color: white;
}

#navbar {
  grid-area: navbar;
  align-self: end;
}

@media only screen and (min-width: 500px) {
  #app {
    grid-template-columns: 0.1fr 1fr;
    grid-template-areas: 'navbar body';
  }

  #navbar {
    align-self: start;
  }
}
</style>
