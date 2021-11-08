<template>
  <div class="body-container">
    <PageHeader :header="`Login`" />
    <form class="form" @submit.prevent="loginUser">
      <div class="form-header">
        <div class="title">Welcome</div>
        <div class="subtitle">Please login</div>
        <div class="register">
          <router-link to="/register" class="register-link">Signup</router-link>
        </div>
      </div>
      <div class="input-container">
        <input
          type="email"
          name="email"
          id="email"
          class="input"
          v-model="form.emailId"
          placeholder="Email ID "
        />
      </div>

      <div class="input-container">
        <input
          id="password"
          class="input"
          type="password"
          placeholder="Password"
          v-model="form.password"
        />
      </div>

      <button type="submit" class="submit">
        Login
      </button>
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
    </form>
  </div>
</template>

<script>
import AppBanner from '@/components/utils/AppBanner';
import PageHeader from '@/components/utils/PageHeader';

export default {
  name: 'SignUpForm',
  components: {
    AppBanner,
    PageHeader,
  },
  data() {
    return {
      form: {
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
    loginUser() {
      this.status = 'LOADING';
      this.clickedOnLogin = !this.clickedOnLogin;

      this.$store
        .dispatch('login', this.form)
        .then(() => {
          this.status = 'LOADED';
          this.$router.push({ name: 'AppHome' });
        })
        .catch((error) => {
          this.isBannerVisible = true;

          this.status = 'ERROR';
          this.error = error;
          this.message = 'Credentials do not match';
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
.form {
  background-color: #202020;
  color: #8edce6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px;
  /* display: grid; */
  /* grid-template-rows: 0.1fr 0.4fr 0.1fr; */
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
  margin: 10px 0;
}

.input {
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb 51%, #a1c4fd) var(--x, 0) /
    200%;
  border-radius: 5px;
  border: 0;
  box-sizing: border-box;
  color: #212121;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
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
