<template>
  <div class="navbar">
    <div class="navbar-item item-1">
      <router-link class="navbar-link" to="/">Home</router-link>
    </div>
    <div class="navbar-item item-2">
      <router-link class="navbar-link" to="/portfolio">Portfolio</router-link>
    </div>
    <div class="navbar-item item-3">
      <router-link class="navbar-link" to="/alerts">Alerts</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'item-1 item-2 item-3';
  justify-items: center;
}

.item-1 {
  grid-area: item-1;
}
.item-2 {
  grid-area: item-2;
}
.item-3 {
  grid-area: item-3;
}

.navbar-link {
  border: 1px solid red;
  text-decoration: none;
}

@media only screen and (min-width: 500px) {
  .navbar {
    height: 100vh;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr;
    grid-template-areas:
      'item-1'
      'item-2'
      'item-3';
  }
}
</style>
