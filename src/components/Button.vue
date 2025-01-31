<template>
  <button class="btn">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string
}>();
</script>
 
<style scoped>
.btn {
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    border: 0.2rem solid white;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    transition: all 0.3s ease;
    cursor: pointer;
    animation: moveInUp .5s ease-out .75s;
    backface-visibility: hidden;
    animation-fill-mode: backwards;
}
 
.btn:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.3);
    border: 0.2rem solid rgba(255, 255, 255, 0.3);
    transform: translateY(-0.2rem);
}

.btn:active {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
}

/* Animation adjustments */
@keyframes moveInUp {
  0% {
    opacity: 0;
    transform: translateY(15rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
    
}

/* Responsive adjustments */
@media (max-width: 76.8rem) {
    .btn {
        padding: 1rem 2rem;
        font-size: 1rem;
    }
}
</style>