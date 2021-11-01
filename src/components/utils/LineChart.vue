<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    chartLabels: {
      type: Array,
      default: () => [],
      required: true,
    },
    chartData: {
      type: Array,
      default: () => [],
      required: true,
    },
    coinId: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: this.chartLabels,
        datasets: [
          {
            label: this.coinId,
            data: this.chartData,
            backgroundColor: 'transparent',
            borderColor: 'white',
            pointBackgroundColor: 'rgba(171, 71, 188, 1)',
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        // width: 320px,
        title: {
          display: true,
          text: 'Purchase history',
        },
      }
    );
  },
};
</script>
