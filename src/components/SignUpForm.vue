<template>
  <div class="body-container">
    <form class="form" @submit.prevent="registerUser">
      <div class="form-header">
        <div class="title">Welcome</div>
        <div class="subtitle">Please register</div>
        <div class="register">
          <router-link to="/login" class="register-link">Login</router-link>
        </div>
      </div>
      <div class="input-container ic1">
        <input
          type="text"
          name="username"
          id="username"
          class="input"
          v-model="form.username"
        />
        <div class="cut"></div>
        <label for="username" class="placeholder">Username</label>
      </div>
      <div class="input-container ic2">
        <input
          type="email"
          name="email"
          id="email"
          class="input"
          v-model="form.emailId"
        />
        <div class="cut"></div>
        <label for="email" class="placeholder">Email ID</label>
      </div>

      <div class="input-container ic2">
        <input
          id="password"
          class="input"
          type="password"
          placeholder=" "
          v-model="form.password"
        />
        <div class="cut"></div>
        <label for="coinName" class="placeholder">Password</label>
      </div>

      <button type="submit" class="submit">
        Register
      </button>
    </form>
    <div v-show="clickedOnLogin">
      <div v-if="status === 'LOADING'">
        <AppBanner :status="status" :message="message" />
      </div>
      <div v-else-if="status === 'ERROR'">
        <AppBanner
          :status="status"
          :message="message"
          v-show="isBannerVisible"
          @close="closeBanner"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppBanner from '@/components/utils/AppBanner';

export default {
  name: 'SignUpForm',
  components: {
    AppBanner,
  },

  data() {
    return {
      form: {
        username: '',
        emailId: '',
        password: '',
      },
      // AppSpinner data
      status: 'LOADED',
      error: null,
      message: 'Logging you in ... ',
      clickedOnLogin: false,
      isBannerVisible: false,
    };
  },
  methods: {
    closeBanner() {
      this.isBannerVisible = false;
      this.clickedOnLogin = !this.clickedOnLogin;
    },
    registerUser() {
      this.status = 'LOADING';
      this.clickedOnLogin = !this.clickedOnLogin;

      this.$store
        .dispatch('register', this.form)
        .then(() => {
          this.status = 'LOADED';
          this.$router.push({ name: 'AppHome' });
        })
        .catch((error) => {
          this.isBannerVisible = true;

          this.status = 'ERROR';
          this.error = error;
          this.message = 'Account not created. Please try again';
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
/* .body-content {
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr;
} */

.form {
  background-color: #202020;
  color: #8edce6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  margin: 10px;
  grid-template-rows: 0.1fr 0.4fr 0.1fr;
}
.form-header {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 0.5fr 1fr;
}
.title {
  color: #eee;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.ic1 {
  margin-top: 20px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb 51%, #a1c4fd) var(--x, 0) /
    200%;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #212121;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #202020;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  outline: 0;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #06b;
}

.register {
  background: linear-gradient(90deg, #84fab0, #c2e9fb 51%, #84fab0) var(--x, 0) /
    200%;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  outline: 0;
  width: 100%;
  display: grid;
  place-items: center;
}

.register:active {
  background-color: #06b;
}

.register-link {
  text-decoration: none;
  color: black;
}

@media only screen and (min-width: 500px) {
  .form {
    width: 499px;
    place-self: center;
  }
}
</style>
