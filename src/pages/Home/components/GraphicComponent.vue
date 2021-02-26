<template>
    <div class="chart-area">
        <canvas :height="350" :id="salesChartID"></canvas>
    </div>
</template>

<script>
import Chart from "chart.js";

let chart;
export default {
    name: 'GraphicComponent',
    components: {
  },
  
  data() {
    return {
      salesChartID: "salesChart",
      bigLineChart: {
        allData: [
          [0, 20, 70, 30, 15, 40, 20, 60],
        ],
        activeIndex: 0,
      },
    };
  },

  methods: {
    initBigChart() {
      chart.destroy();
    },
  },

  mounted() {
    chart = new Chart(
      document.getElementById(this.salesChartID).getContext("2d"),
      {
        type: "line",
        data: {
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Performance",
              tension: 0.4,
              borderWidth: 4,
              borderColor: "#5e72e4",
              pointRadius: 0,
              backgroundColor: "transparent",
              data: this.bigLineChart.allData[0],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
          scales: {
            yAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 0,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 10,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
          },
          layout: {
            padding: 0,
          },
        },
      }
    );
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.chart-area{
    background-color: $blue;
    padding: 20px;
    border-radius: 10px;
    height: 450px;
}

</style>