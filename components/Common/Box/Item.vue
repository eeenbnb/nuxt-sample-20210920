<template>
  <div class="box">
    <div class="box__inner">
      <slot></slot>
    </div>
    <div class="box__outer">
      <slot name="outer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  border: 1px solid gray;
  border-radius: 20px;
  &__inner {
    padding: 16px;
  }
  &__outer {
    &:empty {
      display: none;
    }
    border-top: 1px solid gray;
  }
}
</style>