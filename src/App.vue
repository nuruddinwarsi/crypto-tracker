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
#app {
  overflow: hidden;
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr;
  grid-template-areas:
    'body'
    'navbar';
}

#main-content {
  grid-area: body;
}

#navbar {
  grid-area: navbar;
  align-self: end;
}

@media only screen and (min-width: 500px) {
  #app {
    grid-template-columns: 0.25fr 1fr;
    grid-template-areas: 'navbar body';
  }

  #navbar {
    align-self: start;
  }
}
</style>
