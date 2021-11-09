<template>
  <transition name="modal-fade">
    <div class="msg-box">
      <div class="banner" :class="changeBannerColor">
        <div class="message">
          <div>
            <img
              class="rotate"
              src="../../assets/btc_logo.png"
              alt="loading icon"
              v-show="status === 'LOADING'"
            />
          </div>
          <hr />
          <span>{{ message }}</span>
          <button
            v-show="status === 'ERROR'"
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </div>
      </div>
    </div>
  </transition>
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
  methods: {
    close() {
      this.$emit('close');
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner {
  border-radius: 5px;
  padding: 32px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 2px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.btn-close {
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.rotate {
  width: 50%;
  place-self: center;
  animation: rotation 5s infinite linear;
}

@-webkit-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
@-moz-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
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
