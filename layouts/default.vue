<script setup lang="ts">

</script>

<template>
  <a-config-provider>
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
