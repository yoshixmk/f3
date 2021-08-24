<template>
  <top-layer-panel>
    <navbar msg="Facilitator" />
    <vote />
    <facilitator :fingers="fingers" />
  </top-layer-panel>
  <fish-stage />
</template>

<script lang="ts">
import axios from 'axios';
import Navbar from '../organisms/Navbar.vue';
import Vote from '../organisms/Vote.vue';
import Facilitator from '../organisms/Facilitator.vue';
import FishStage from '../organisms/fish/FishStage.vue';
import TopLayerPanel from '../organisms/TopLayerPanel.vue';
import { Fingers } from '../../domains/fingers';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Navbar,
    Vote,
    Facilitator,
    FishStage,
    TopLayerPanel,
  },
  data() {
    return {
      fingers: [] as Fingers,
    };
  },
  mounted() {
    setInterval(() => {
      this.updateFingersInfo();
    }, 1000);
  },
  methods: {
    updateFingersInfo() {
      axios
        .get<Fingers>(import.meta.env.API_URL || '' + '/v1/fingers')
        .then((response) => (this.fingers = response.data));
    },
  },
});
</script>

<style scoped lang="scss">
.top-layer {
  z-index: 1;
}
</style>
