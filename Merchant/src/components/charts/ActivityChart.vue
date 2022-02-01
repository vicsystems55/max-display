<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,

  mounted() {
    this.renderChart(
      {
        labels: [
          "4 Jan",
          "5 Jan",
          "6 Jan",
          "7 Jan",
          "8 Jan",
          "9 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
          "13 Jan",
          "14 Jan",
          "15 Jan",
        ],
        datasets: [
          {
            label: "Card Transactions",
            backgroundColor: "rgba(22, 82, 240, 0.75)",
            borderColor: "transparent",
            data: [35, 65, 52, 115, 98, 185, 125, 35, 65, 52, 115, 140],
            lineTension: 0,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              barPercentage: 0.45,
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                fontColor: "#8a909d",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "#eee",
              },
              ticks: {
                stepSize: 50,
                fontColor: "#8a909d",
              },
            },
          ],
        },
        tooltips: {
          mode: "index",
          intersect: false,
          titleFontColor: "#888",
          bodyFontColor: "#555",
          titleFontSize: 12,
          bodyFontSize: 15,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: true,
          xPadding: 10,
          yPadding: 7,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2,
          caretSize: 6,
          caretPadding: 5,
        },
      }
    );
  },
};
</script>
