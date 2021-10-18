<template>
  <div class="navbar">
    <router-link class="navbar-link item-1" exact to="/" active-class="active"
      >Home</router-link
    >
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
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'item-1 item-2 item-3';
  justify-items: stretch;
  /* align-items: center; */
  border-radius: 7px 7px 0 0;
  background-color: #2b2a3a;
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
  /* border: 1px solid red; */
  text-decoration: none;
  color: #febc1d;
  padding: 0.75rem;
  /* place-self: stretch; */
  text-align: center;

  /* TRYING HOVER */
  /* background-image: linear-gradient(
    to top,
    #2b2a3a,
    #005982,
    #0091a4,
    #00c580,
    #a8eb12
  ); */
  /* transition: 0.5s;
  background: linear-gradient(90deg, #f6d369, #fda085 51%, #f6d365) var(--x, 0) /
    200%;
  color: white; */

  /* box-shadow: 0 0 20px #eee; */
  /* border-radius: 10px; */
}

.navbar-link:hover {
  --x: 100%;
}
.active {
  /* border-bottom: 2px solid #febc1d; */
  /* background-color: white; */
  /* color: red; */
}
@media only screen and (min-width: 500px) {
  .navbar {
    height: 100vh;
    grid-template-rows: repeat(3, 0.1fr);
    grid-template-columns: auto;
    grid-template-areas:
      'item-1'
      'item-2'
      'item-3';
    border-radius: 0 5px 0 0;
  }

  /* .active {
    border-left: 2px solid #febc1d;
    border-bottom: 0;
  } */
}
</style>
