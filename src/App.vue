<template>
  <div id="app">
    <RouterView id="main"></RouterView>
    <AppNavbar id="navbar"></AppNavbar>
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

/* @-webkit-keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@-moz-keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@-o-keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
} */

body {
  font-family: 'Chivo', sans-serif;
  overflow: hidden;
  /* animation: 1s ease-out 0s 1 slideInFromLeft; */
}

#app {
  background: #121212;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
}

#main {
  color: white;
  display: grid;
  overflow-y: scroll;
  grid-template-columns: 1fr;
  margin: 0 8px;
}
</style>
