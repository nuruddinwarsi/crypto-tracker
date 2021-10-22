<template>
  <div id="navbar">
    <div class="toggleButton" v-show="isDesktop">
      <button
        type="button"
        class="navbar-toggle"
        aria-label="Open navigation menu"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="navbar" v-show="!isDesktop">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  computed: {
    isDesktop() {
      return this.windowWidth > 500;
    },
  },
};
</script>

<style scoped>
.navbar-toggle {
  display: grid;
  background-color: #121212;
  border: none;
  margin: 16px 0 0 0;
}
.icon-bar {
  display: inline-block;
  width: 25px;
  height: 4px;
  margin: 2px;
  background-color: rgb(128, 128, 128);
}
.navbar {
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'item-1 item-2 item-3';
  justify-items: stretch;
  /* align-items: center; */
  border-radius: 7px 7px 0 0;
  background-color: #202020;
  row-gap: 0;
  /* From App.vue */
  grid-area: navbar;
  align-self: end;
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
  /* border: 1px solid red; */
  text-decoration: none;
  color: #8edce6;
  padding: 20px;
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
/* .active {
  border-bottom: 2px solid #febc1d;
  background-color: white;
  color: red;
} */
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

  /* .active {
    border-left: 2px solid #febc1d;
    border-bottom: 0;
  } */
}
</style>
