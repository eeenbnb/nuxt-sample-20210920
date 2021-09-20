<template>
  <div class="one">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.one {
  &:not(:first-of-type) {
    margin-top: 16px;
  }
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
</style>