<template>
  <ListPostItemUi :post="editedPost" />
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@vue/composition-api"
import { Post } from "@/types/post"

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup(props) {
    console.log(props.post)
    const editedPost = computed(() => {
      const item = props.post
      return item
    })
    return {
      editedPost,
    }
  },
})
</script>
