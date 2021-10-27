<template>
  <div class="page-title">
    <h1>{{ header }}</h1>
    <button v-if="isAuthenticated">Logout</button>
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
  color: white;
}
</style>
