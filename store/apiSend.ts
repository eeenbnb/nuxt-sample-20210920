import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { Form } from "@/types/form";

export interface ApiResponse {
  res: any;
}

export const state = (): ApiResponse => ({
  res: {},
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  get(state) {
    return state;
  },
});

export const mutations = mutationTree(state, {
  setResponse(state, payload) {
    Object.assign(state, payload);
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    // paramからリクエスト
    async getResponseWithParams({ commit }, { param }: { param: Form }) {
      const res = {}; // 何かしらの処理
      commit("setResponse", res);
    },
    // stateにある状態からリクエスト
    async getResponseWithState({ commit }) {
      const param = this.app.$accessor.formState.get;
      const res = {}; // 何かしらの処理
      commit("setResponse", res);
    },
  }
);
