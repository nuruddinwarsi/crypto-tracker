<template>
  <div class="body-content">
    <h1>{{ $route.params.coin }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CryptoPage',
};
</script>

<style scoped>
.body-content {
  grid-area: body;
  color: white;
  overflow-y: scroll;
  margin: 0 8px;
}
</style>
