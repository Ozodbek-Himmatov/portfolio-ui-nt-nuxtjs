<script setup></script>

<template>
  <div class="parent mb-8 text-white text-3xl font-mono">
    <slot />
    <div class="w-[130px] mb-1 border-b-2 border-yellow-400"></div>
    <div
      class="child w-[50px] mx-1 border-b-2 border-yellow-400 transition-all duration-400"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.parent:hover .child {
  width: 130px;
}
</style>
