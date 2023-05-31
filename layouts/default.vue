<script setup lang="ts">
import { theme as antdTheme } from 'ant-design-vue'
const color = useColorMode()

const theme = reactive({
  algorithm: color.value === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
})

function toggleTheme() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
  theme.algorithm = color.value === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
}
</script>

<template>
  <a-config-provider :theme="theme">
    <header flex h-48px items-center justify-end px-20px bg-white dark="bg-[var(--bg-header-color)]">
      <!--  -->
      <a-switch :checked="color.value === 'light'" checked-children="Light" un-checked-children="Dark" @update:checked="toggleTheme" />
    </header>
    <div p-20px>
      <slot />
    </div>
  </a-config-provider>
</template>

<style>
html{
  --bg-color: #f1f1f1;
}
html.dark{
  --bg-color: rgb(42, 44, 44);
  --bg-header-color: rgb(36, 37, 37);
}

body{
  background-color: var(--bg-color);
}
</style>
