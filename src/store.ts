import { ActionContext, createStore } from "vuex";

export interface State {
  count: number;
  name: string;
}

export default createStore<State>({
  state: {
    count: 0,
    name: "",
  },
  actions: {
    onSetCount: (context: ActionContext<State, State>, count: number) => {
      context.commit("setCount", count);
    },
    onIncrement: (context: ActionContext<State, State>) => {
      context.commit("increment");
    },
    onDecrement: (context: ActionContext<State, State>) => {
      context.commit("decrement");
    },
    onSetName: (context: ActionContext<State, State>, name: string) => {
      context.commit("setName", name);
    },
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count;
    },
    increment(state: State) {
      state.count++;
    },
    decrement(state: State) {
      if (state.count <= 0) {
        state.count = 4;
        return;
      }
      state.count--;
    },
    setName(state: State, name: string) {
      state.name = name;
    },
  },
});
