<template>
  <form @submit="submit">
    <div>
      <label for="text1">text1</label>
      <input id="text1" name="text1" type="text" v-model="text1" />
    </div>
    <div>
      <label for="text2">text2</label>
      <input id="text2" name="text2" type="text" v-model="text2" />
    </div>
    <button>submit</button>
  </form>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const { app } = useContext();
    const text1 = ref("");
    const text2 = ref("");
    const submit = (e) => {
      e.preventDefault();
      app.$accessor.formState.init();
      app.$accessor.formState.set({
        text1: text1,
        text2: text2,
      });
      app.$accessor.apiSend.getResponseWithParams({ param: app.$accessor.formState.get });
      app.$accessor.apiSend.getResponseWithState();
    };
    return {
      submit,
      text1,
      text2,
    };
  },
});
</script>
