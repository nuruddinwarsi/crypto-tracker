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
    bannerColour: {
      type: String,
      default: 'default',
    },
    message: {
      type: String,
      default: 'Fetching your data ...',
    },
  },
  computed: {
    changeBannerColor() {
      return {
        success: this.bannerColour === 'success',
        default: this.bannerColour === 'default',
        error: this.bannerColour === 'error',
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

.default {
  color: #00529b;
  background-color: #bde5f8;
}
.error {
  color: #d8000c;
  background-color: #ffd2d2;
}
.success {
  color: #4f8a10;
  background-color: #dff2bf;
}
</style>
