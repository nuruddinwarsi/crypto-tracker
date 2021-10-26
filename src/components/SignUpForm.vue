<template>
  <div class="form-container">
    <div class="page-title">
      <h1>Register</h1>
    </div>
    <form name="form" class="form-body" @submit.prevent="registerUser">
      <div class="form-input">
        <label for="username">Username</label>
        <input
          name="username"
          type="username"
          placeholder="John Doe"
          v-model="form.username"
          required
        />
      </div>
      <div class="form-input">
        <label for="emailId">Email ID</label>
        <input
          name="emailId"
          type="emailId"
          placeholder="john.doe@gmail.com"
          v-model="form.emailId"
          required
        />
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="********"
          v-model="form.password"
          required
        />
      </div>
      <div class="form-input">
        <button type="submit" class="register">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import { register } from '@/services/auth';

export default {
  name: 'SignUpForm',
  data() {
    return {
      form: {
        firstName: 'Nuruddin',
        lastName: 'Warsi',
        username: 'nuruddin',
        emailId: 'test@gmail.com',
        password: 'Nuruddin@123',
      },
    };
  },
  methods: {
    registerUser() {
      this.$store
        .dispatch('register', this.form)
        .then(() => this.$router.push({ name: 'SignUpForm' }))
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
.form-container {
  display: grid;
  grid-template-rows: 0.1fr 1fr;
}

label {
  display: block;
}
.form-body {
  max-height: 70%;
  display: grid;
  align-items: center;
  row-gap: 0px;
  grid-template-rows: auto;
}
.form-input {
  display: grid;
  max-width: 768px;
}

.form-input input {
  background-color: #202020;
  border-radius: 5px;
  border: none;
  padding: 16px;
  margin-top: 8px;
}
.form-input input:focus,
.form-input input:hover {
  padding: 20px;
  transition: padding 0.5s;
}

.form-input button {
  padding: 16px;
  border-radius: 5px;
  border: none;
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb 51%, #a1c4fd) var(--x, 0) /
    200%;
}
.form-input button:hover,
.form-input button:focus {
  transition: padding 0.3s;
  padding: 20px;
  cursor: pointer;
}
</style>
