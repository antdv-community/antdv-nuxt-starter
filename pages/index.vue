<script setup lang="ts">
const checked = shallowRef(true)
const handleClick = () => {
  message.info('test')
}
</script>

<template>
  <div>
    <a-button @click="handleClick">
      按钮
    </a-button>
    <a-switch :checked="checked" />
  </div>
</template>
