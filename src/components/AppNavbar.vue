<template>
  <div class="navbar">
    <div>
      <router-link
        class="navbar-link item-1"
        exact
        to="/"
        active-class="active"
      >
        <font-awesome-icon icon="home" class="icon" /> Home
      </router-link>
    </div>
    <div>
      <router-link
        class="navbar-link item-2"
        to="/portfolio"
        active-class="active"
      >
        <font-awesome-icon
          :icon="['fab', 'bitcoin']"
          class="icon"
        />Portfolio</router-link
      >
    </div>
    <div>
      <router-link
        class="navbar-link item-3"
        to="/alerts"
        active-class="active"
      >
        <font-awesome-icon icon="bell" class="icon" />Alerts</router-link
      >
    </div>

    <div v-if="!isAuthenticated">
      <router-link class="navbar-link item-4" to="/login" active-class="active">
        <font-awesome-icon icon="user" class="icon" />Login</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  justify-items: stretch;
  border-radius: 5px 5px 0 0;
  background-color: #202020;
  row-gap: 0;
}

.icon {
  padding: 0 8px;
}

.navbar-link {
  text-decoration: none;
  color: #8edce6;
  padding: 16px 0;
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
</style>
