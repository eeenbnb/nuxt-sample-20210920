import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Form } from "@/types/form";

export const state = (): Form => ({
  text1: "",
  text2: "",
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  get(state) {
    return state;
  },
});

export const mutations = mutationTree(state, {
  init(state) {
    state.text1 = "";
    state.text2 = "";
  },
  set(state, payload: Form) {
    Object.assign(state, payload);
  },
});

export const actions = actionTree({ state, getters, mutations }, {});
