<script setup lang="ts">
const checked = shallowRef(true)
</script>

<template>
  <div>
    <a-button>按钮</a-button>
    <a-switch :checked="checked" />
  </div>
</template>
