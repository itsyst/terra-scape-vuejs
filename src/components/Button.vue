<template>
  <button class="btn btn--color btn--animation">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string
}>();
</script>
 
<style scoped lang="scss">
@use '@/sass/components/_button';
</style>