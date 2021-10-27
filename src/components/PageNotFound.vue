<template>
  <div class="container">
    <h1>Not found <span>:(</span></h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>

    <p class="big">404</p>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>

<style scoped>
.container {
  justify-items: center;
}
p {
  font-size: 20px;
}
.big {
  font-style: normal;
  font-size: 150px;
}
</style>
