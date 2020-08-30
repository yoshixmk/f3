<template>
  <user-info :users="users" />
  <button class="btn btn-primary" @click="updateData()">IT'S SHOWTIME !!</button>
  <div v-show="isShowTime" id="chart" />
  <br />
  <reset-button />
</template>

<script>
import axios from "axios";
import UserInfo from "./UserInfo.vue";
import ResetButton from "./ResetButton.vue";
import ApexCharts from "apexcharts";

export default {
  name: "Facilitator",
  mounted() {
    this.chart = new ApexCharts(
      document.querySelector("#chart"),
      this.chartOptions
    );
    // vue-apexcharts does not support Vue 3.0 yet.
    this.chart.render();
  },
  components: {
    UserInfo,
    ResetButton,
  },
  props: ["users"],
  data() {
    return {
      isShowTime: false,
      chartOptions: {
        chart: { type: "bar" },
        series: [{ name: "vote", data: [] }],
      },
      chart: undefined,
    };
  },
  methods: {
    getUsersGroupBy() {
      const result = this.users.reduce(
        (h, obj) =>
          Object.assign(h, { [obj.value]: (h[obj.value] || []).concat(obj) }),
        {}
      );
      console.log(result);
      return result;
    },
    updateData() {
      this.isShowTime = !this.isShowTime;
      const data = this.getUsersGroupBy();
      this.chartOptions = {
        chart: {
          type: "bar",
        },
        series: [
          {
            name: "vote",
            data: [
              // Number of people
              data["1"]?.length ?? 0,
              data["2"]?.length ?? 0,
              data["3"]?.length ?? 0,
              data["4"]?.length ?? 0,
              data["5"]?.length ?? 0,
            ],
          },
        ],
        xaxis: {
          categories: [1, 2, 3, 4, 5],
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="arrow_box p-1">' +
                "<span>" +
                data[`${dataPointIndex + 1}`]
                  ?.map((d) => d.name)
                  ?.join("<br>") ?? "" + "</span>" + "</div>"
            );
          },
        },
      };
      // Remove elements inside
      document.querySelector("#chart").innerHTML = "";

      this.chart = new ApexCharts(
        document.querySelector("#chart"),
        this.chartOptions
      );
      this.chart.render();
    },
  },
};
</script>
