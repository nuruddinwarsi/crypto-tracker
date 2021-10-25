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
@import url('https://fonts.googleapis.com/css2?family=Chivo&display=swap');

@keyframes slideInFromLeft {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
* {
  font-family: 'Chivo', sans-serif;
  animation: 1s ease-out 0s 1 slideInFromLeft;
}

#app {
  display: grid;
  grid-template-rows: auto;
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
  min-height: 100vh;
  grid-area: body;
  color: white;
  margin: 0 16px;
}
@media only screen and (min-width: 500px) {
  #app {
    grid-template-columns: 0.1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'navbar body';
  }
}
</style>
