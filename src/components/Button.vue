<template>
	<button class="btn btn--color" :class="{ 'btn--animation': props.animate }">{{ props.text }}</button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string;
    animate?: boolean;
  }>();
</script>

<style scoped lang="scss">
	@use '@/sass/components/_button';
</style>
