<template>
  <CommonListPearentItem>
    <CommonListChildItem v-for="(post, index) in postList" :key="index">
      <ListPostItemLogic :post="post" />
    </CommonListChildItem>
  </CommonListPearentItem>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { Post } from "@/types/post"

export default defineComponent({
  setup() {
    const postList: Post[] = [
      { img: "https://avatars.githubusercontent.com/u/7958925?v=4", text: "test1" },
      { img: "https://avatars.githubusercontent.com/u/7958925?v=4", text: "test2" },
      { img: "https://avatars.githubusercontent.com/u/7958925?v=4", text: "test3" },
    ]
    return {
      postList,
    }
  },
})
</script>
