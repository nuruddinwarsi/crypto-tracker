<template>
  <div class="navbar">
    <div class="navbar-item">
      <router-link class="navbar-link" to="/">Home</router-link>
    </div>
    <div class="navbar-item">
      <router-link class="navbar-link" to="/portfolio">Portfolio</router-link>
    </div>
    <div class="navbar-item">
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
  grid-template-rows: auto;
  justify-items: center;
}

.navbar-link {
  border: 1px solid red;
  text-decoration: none;
}
</style>
