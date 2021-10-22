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
#navbar {
  display: grid;
  grid-area: navbar;
}
.navbar-toggle {
  display: grid;
  background-color: #121212;
  border: none;
  margin: 16px 0 0 16px;
}
.icon-bar {
  display: inline-block;
  width: 25px;
  height: 4px;
  margin: 2px;
  background-color: rgb(128, 128, 128);
}
.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'item-1 item-2 item-3';
  justify-items: stretch;
  border-radius: 7px 7px 0 0;
  background-color: #202020;
  row-gap: 0;
  /* From App.vue */

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
  text-decoration: none;
  color: #8edce6;
  padding: 20px;
  text-align: center;
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
}
</style>
