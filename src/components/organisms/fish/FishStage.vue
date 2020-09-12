<template>
  <!-- ステージ全体のコンポーネントです。背景・金魚・波紋を合成します -->
  <StageBg class="StageRoot">
    <FishLayer
      :max-fish="maxFish"
    />
    <WaveLayer />
  </StageBg>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import StageBg  from "./StageBg.vue";
import FishLayer  from "./FishLayer.vue";
import WaveLayer  from "./WaveLayer.vue";

export default defineComponent({
  components: { StageBg, FishLayer, WaveLayer },
  props: {
    maxFish: { type: Number, default: 25 },
  },
});
</script>
