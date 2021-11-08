<template>
  <div class="page-title">
    <h1>{{ header }}</h1>
    <button v-if="isAuthenticated" @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    header: {
      type: String,
      default: '',
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() =>
        this.$router.push({
          name: 'LoginForm',
        })
      );
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.page-title {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 0.1fr;
  margin-bottom: 32px;
}
.page-title h1 {
  place-self: center;
}
.page-title button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  place-self: center;
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb 51%, #a1c4fd) var(--x, 0) /
    200%;
  color: #212121;
}
.page-title button:hover,
.page-title button:focus {
  cursor: pointer;
}

.page-title button:active {
  transform: translateY(4px);
}
</style>
