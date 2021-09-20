<template>
  <CommonBoxItem>
    <div class="post">
      <div class="post__thumbnail">
        <img class="post__thumbnail__img" :src="post.img" />
      </div>
      <div class="post__contens">
        <p class="post__contens__body">
          {{ post.text }}
        </p>
      </div>
    </div>
  </CommonBoxItem>
</template>

<style lang="scss" scoped>
.post {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 0 16px;
  &__thumbnail {
    width: 80px;
    &__img {
      width: 100%;
      height: 100%;
    }
  }
  &__contens {
    &__body {
      margin: 0;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api"
import { Post } from "@/types/post"

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup() {},
})
</script>
