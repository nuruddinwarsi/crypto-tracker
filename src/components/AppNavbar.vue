<template>
  <div class="navbar">
    <router-link class="navbar-link item-1" exact to="/" active-class="active"
      >Home
    </router-link>
    <router-link
      class="navbar-link item-2"
      to="/portfolio"
      active-class="active"
      >Portfolio</router-link
    >
    <router-link class="navbar-link item-3" to="/alerts" active-class="active"
      >Alerts</router-link
    >
    <!-- <div class="navbar-item item-4">
      <router-link class="navbar-link" to="/alerts">Alerts</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'item-1 item-2 item-3';
  justify-items: stretch;
  border-radius: 7px 7px 0 0;
  background-color: #202020;
  row-gap: 0;
}

.item-1 {
  grid-area: item-1;
}
.item-2 {
  grid-area: item-2;
}
.item-3 {
  grid-area: item-3;
  color: #febc1d;
}

.navbar-link {
  text-decoration: none;
  color: #8edce6;
  padding: 20px;
  text-align: center;
}

.navbar-link:hover {
  --x: 100%;
}

@media only screen and (min-width: 500px) {
  .navbar {
    height: 100%;
    grid-template-rows: repeat(3, 0.1fr);
    grid-template-columns: auto;
    grid-template-areas:
      'item-1'
      'item-2'
      'item-3';
    border-radius: 0 5px 0 0;
  }
}
</style>
