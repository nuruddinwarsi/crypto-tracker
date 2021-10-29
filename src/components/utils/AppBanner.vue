<template>
  <div class="msg-box">
    <div class="banner" :class="changeBannerColor">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBanner',
  props: {
    status: {
      type: String,
      default: 'LOADING',
    },
    message: {
      type: String,
      default: 'Fetching your data ...',
    },
  },
  computed: {
    changeBannerColor() {
      return {
        LOADED: this.status === 'LOADED',
        LOADING: this.status === 'LOADING',
        ERROR: this.status === 'ERROR',
      };
    },
  },
};
</script>

<style scoped>
.msg-box {
  display: grid;
}
.banner {
  margin: 8px;
  padding: 32px;
  border-radius: 5px;
  place-self: center;
}

.LOADING {
  color: #00529b;
  background-color: #bde5f8;
}
.ERROR {
  color: #d8000c;
  background-color: #ffd2d2;
}
.LOADED {
  color: #4f8a10;
  background-color: #dff2bf;
}
</style>
