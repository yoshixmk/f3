import { onMounted, onUnmounted } from "vue";

export const useTicker = (onTick: () => void, interval = 1000): void => {
  let timer = 0;
  onMounted(() => {
    timer = window.setInterval(onTick, interval);
  });
  onUnmounted(() => {
    window.clearInterval(timer);
  });
};
