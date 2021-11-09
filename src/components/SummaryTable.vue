<template>
  <div class="table100">
    <table>
      <thead>
        <tr class="table100-head">
          <th class="column1">Date</th>
          <th class="column2">Quantity</th>
          <th class="column3">Amount</th>
          <th class="column4">Bought At</th>
          <th class="column5">Platform</th>
          <th class="column6"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coinData" :key="coin._id">
          <td class="column1">{{ coin.date.slice(0, 10) }}</td>
          <td class="column2">{{ coin.quantity }}</td>
          <td class="column3">₹ {{ coin.amount }}</td>
          <td class="column4">₹ {{ coin.boughtAt }}</td>
          <td class="column5">{{ coin.boughtFrom }}</td>
          <td class="column6">
            <button @click="deleteEntry(coin._id)">
              <font-awesome-icon icon="trash-alt" class="icon" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SummaryTable',
  props: {
    coinData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteEntry(id) {
      this.$emit('deleteEntry', id);
    },
  },
};
</script>

<style scoped>
table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  margin: 16px auto;
  position: relative;
}
table * {
  position: relative;
}
table td,
table th {
  padding-left: 8px;
}
table thead tr {
  height: 60px;
  background: #202020;
}
table tbody tr {
  height: 50px;
}
table tbody tr:last-child {
  border: 0;
}
table td,
table th {
  text-align: left;
}
table td.l,
table th.l {
  text-align: right;
}
table td.c,
table th.c {
  text-align: center;
}
table td.r,
table th.r {
  text-align: center;
}

.table100-head th {
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}

tbody tr {
  font-size: 15px;
  color: #808080;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:hover {
  color: #555555;
  background-color: #f5f5f5;
}
button {
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  table {
    display: block;
  }
  table > *,
  table tr,
  table td,
  table th {
    display: block;
  }
  table thead {
    display: none;
  }
  table tbody tr {
    height: auto;
    padding: 37px 0;
  }
  table tbody tr td {
    padding-left: 40% !important;
    margin-bottom: 24px;
  }
  table tbody tr td:last-child {
    margin-bottom: 0;
  }
  table tbody tr td:before {
    font-size: 14px;
    color: #999999;
    line-height: 1.2;
    font-weight: unset;
    position: absolute;
    width: 40%;
    left: 30px;
    top: 0;
  }
  table tbody tr td:nth-child(1):before {
    content: 'Date';
  }
  table tbody tr td:nth-child(2):before {
    content: 'Quantity';
  }
  table tbody tr td:nth-child(3):before {
    content: 'Amount';
  }
  table tbody tr td:nth-child(4):before {
    content: 'Bought At';
  }
  table tbody tr td:nth-child(5):before {
    content: 'Platform';
  }

  .column4,
  .column5,
  .column6 {
    text-align: left;
  }

  .column4,
  .column5,
  .column6,
  .column1,
  .column2,
  .column3 {
    width: 100%;
  }

  tbody tr {
    font-size: 14px;
  }
  button {
    border: 1px solid #212121;
    padding: 8px;
    width: 50%;
    background: #d8000c;
    color: #ffd2d2;
    border-radius: 5px;
  }
}
</style>
