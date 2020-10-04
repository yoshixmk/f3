<template>
  <button
    class="btn btn-primary"
    @click="updateData()"
  >
    IT'S SHOWTIME !!
  </button>
  <div
    v-show="isShowTime"
    id="chart"
  />
</template>

<script lang="ts">
import ApexCharts from "apexcharts";
import { Fingers } from "../../domains/fingers";
import { defineComponent, PropType } from "vue";

type GroupedByUsers = {
  [key: number]: Fingers | undefined;
};

// Waiting for upgrading vue-apexcharts
// @see https://github.com/apexcharts/vue-apexcharts/issues/221
export default defineComponent({
  props: {
    fingers: {
      type: Object as PropType<Fingers>,
      default: [],
    },
  },
  data() {
    return {
      chartOptions: {
        chart: { type: "bar", height: 350 },
        series: [{ name: "vote", data: [] }],
      } as ApexCharts.ApexOptions,
      chart: undefined as ApexCharts | undefined,
      isShowTime: false,
    };
  },
  mounted() {
    this.chart = new ApexCharts(
      document.querySelector("#chart"),
      this.chartOptions
    );
    // vue-apexcharts does not support Vue 3.0 yet.
    this.chart.render();
  },
  methods: {
    getUsersGroupBy(): GroupedByUsers {
      const result = this.fingers?.reduce(
        (h, obj) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Object.assign(h, { [obj.value]: ((h as any)[obj.value] || []).concat(obj) }),
        {}
      );
      console.log(result);
      return result;
    },
    updateData() {
      this.isShowTime = !this.isShowTime;
      const data: GroupedByUsers = this.getUsersGroupBy();
      this.chartOptions = {
        chart: { type: "bar", height: 350 },
        series: [
          {
            name: "vote",
            data: [
              // Number of people
              data[1]?.length ?? 0,
              data[2]?.length ?? 0,
              data[3]?.length ?? 0,
              data[4]?.length ?? 0,
              data[5]?.length ?? 0,
            ],
          },
        ],
        xaxis: {
          categories: [1, 2, 3, 4, 5],
        },
        tooltip: {
          custom: function ({ dataPointIndex }) {
            const index = dataPointIndex ?? 0;
            return (
              '<div class="arrow_box p-1">' +
                "<span>" +
                data[index + 1]?.map((d) => d.name)?.join("<br>") ??
              "" + "</span>" + "</div>"
            );
          },
        },
      };
      // Remove elements inside
      const el: Element | null = document.querySelector("#chart");
      if (el !== null) {
        el.innerHTML = "";

        this.chart = new ApexCharts(
          document.querySelector("#chart"),
          this.chartOptions
        );
        this.chart.render();
      }
    },
  },
});
</script>
