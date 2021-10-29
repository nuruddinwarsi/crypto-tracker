<template>
  <div class="body-content">
    <PageHeader :header="`Add To Portfolio`" />
    <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input
          type="date"
          name="date"
          id="date"
          class="input"
          v-model="inputDate"
        />
        <div class="cut"></div>
        <label for="date" class="placeholder">Date</label>
      </div>
      <div class="input-container ic2">
        <input
          id="coinId"
          class="input"
          type="text"
          placeholder=" "
          v-model="coinId"
        />
        <div class="cut"></div>
        <label for="coinId" class="placeholder">Coin ID</label>
      </div>
      <div class="input-container ic2">
        <input
          id="coinName"
          class="input"
          type="text"
          placeholder=" "
          v-model="coinName"
        />
        <div class="cut"></div>
        <label for="coinName" class="placeholder">Coin name</label>
      </div>

      <div class="input-container ic2">
        <input
          id="quantity"
          class="input"
          type="number"
          placeholder=" "
          v-model="quantity"
        />
        <div class="cut"></div>
        <label for="quantity" class="placeholder">Quantity</label>
      </div>

      <div class="input-container ic2">
        <input
          id="amount"
          class="input"
          type="number"
          placeholder=" "
          v-model="amount"
        />
        <div class="cut"></div>
        <label for="amount" class="placeholder">Amount</label>
      </div>
      <div class="input-container ic2">
        <input
          id="boughtAt"
          class="input"
          type="number"
          placeholder=" "
          v-model="boughtAt"
        />
        <div class="cut"></div>
        <label for="boughtAt" class="placeholder">Price</label>
      </div>
      <div class="input-container ic2">
        <input
          id="boughtFrom"
          class="input"
          type="text"
          placeholder=" "
          v-model="boughtFrom"
        />
        <div class="cut"></div>
        <label for="boughtFrom" class="placeholder">Platform</label>
      </div>
      <button type="submit" class="submit" @click="callAddToPortfolio()">
        Add
      </button>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/utils/PageHeader';
import { addToPortfolio } from '@/services/addToPortfolio';

export default {
  name: 'AddToPortfolio',
  components: {
    PageHeader,
  },
  data() {
    return {
      coinId: '',
      coinName: '',
      quantity: 0,
      amount: 0,
      boughtAt: 0,
      boughtFrom: '',
      inputDate: new Date().toISOString().slice(0, 10),
    };
  },
  methods: {
    async callAddToPortfolio() {
      try {
        const data = await addToPortfolio(
          this.coinId,
          this.coinName,
          this.quantity,
          this.amount,
          this.boughtAt,
          this.boughtFrom,
          this.inputDate
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.body-content {
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr;
}

.form {
  background-color: #202020;
  color: #8edce6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
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
  margin-top: 40px;
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

@media only screen and (min-width: 500px) {
  .form {
    width: 499px;
    place-self: center;
  }
}
</style>
