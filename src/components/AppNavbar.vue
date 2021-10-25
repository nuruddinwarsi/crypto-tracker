<template>
  <div class="navbar">
    <router-link class="navbar-link item-1" exact to="/" active-class="active">
      <font-awesome-icon icon="home" class="icon" /> Home
    </router-link>
    <router-link
      class="navbar-link item-2"
      to="/portfolio"
      active-class="active"
    >
      <font-awesome-icon icon="user" class="icon" />Portfolio</router-link
    >
    <router-link class="navbar-link item-3" to="/alerts" active-class="active">
      <font-awesome-icon icon="bell" class="icon" />Alerts</router-link
    >
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
  border-radius: 5px 5px 0 0;
  background-color: #202020;
  row-gap: 0;
}

.icon {
  padding: 0 8px;
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
  display: grid;
  grid-template-rows: repeat(2, 0.5fr);
  justify-items: center;
  align-items: center;
  /* text-align: center; */
}
.navbar-link:hover,
.navbar-link:focus {
  border-bottom: 2px solid #a1c4fd;
  color: white;
  border-radius: 5px;
}

.active {
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb 51%, #a1c4fd) var(--x, 0) /
    200%;
  color: white;
  border-radius: 5px;
}

@media only screen and (min-width: 500px) {
  .navbar {
    height: 100%;
    grid-template-rows: repeat(3, 0.1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      'item-1'
      'item-2'
      'item-3';
    border-radius: 0 5px 0 0;
  }
  .navbar-link {
    grid-template-rows: 1fr;
    grid-template-columns: 0.1fr 0.9fr;
  }

  .navbar-link:hover,
  .navbar-link:focus {
    border-bottom: none;
    border-left: 2px solid #a1c4fd;
    color: white;
    border-radius: 5px;
  }

  /* .active {
    border-bottom: none;
    border-left: 2px solid #8edce6;
  } */
}
</style>
