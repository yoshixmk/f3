// 金魚のDOMを表示するためのコンポーネントです。
// Vueとして状態を管理する必要がないので関数コンポーネントにしています。

import { h, VNode } from "vue";

type Props = {
  x: number;
  y: number;
  angle: number;
  color: string;
  scale: number;
};

export const Fish = (props: Props): VNode => {
  const { x, y, angle, color, scale } = props;
  const fixedScale = scale || 1;
  const style = `color: ${color};transform: translate(${x}px, ${y
    }px) rotate(${angle}deg) scale(${fixedScale}, ${fixedScale * 0.8
    }) rotate(${-45}deg);`;
  return h("div", { class: "FishRoot", style });
};
