<template>
  <user-info :fingers="fingers" />
  <apexchart
    height="350"
    type="bar"
    :options="options"
    :series="series"
    :tooltip="tooltip"
  />
</template>

<script lang="ts">
import UserInfo from "./UserInfo.vue";
import { Fingers } from "../../domains/fingers";
import { defineComponent, PropType } from "vue";

type GroupedByUsers = {
  [key: number]: Fingers | undefined;
};

export default defineComponent({
  components: {
    UserInfo,
  },
  props: {
    fingers: {
      type: Object as PropType<Fingers>,
      default: [],
    },
  },
  data() {
    return {
      options: {
        chart: {
          id: 'f3-chart'
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5]
        }
      },
    }
  },
  computed: {
    series() {
      const data: GroupedByUsers = this.getUsersGroupBy();
      return [
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
        ]
    },
    tooltip() {
        const data: GroupedByUsers = this.getUsersGroupBy();
        return {
          custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
            const index = dataPointIndex ?? 0;
            return (
              '<div class="arrow_box p-1">' +
                "<span>" +
                data[index + 1]?.map((d) => d.name)?.join("<br>") ??
              "" + "</span>" + "</div>"
            );
          }
        }
      },
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
  }
});
</script>
