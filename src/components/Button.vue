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
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    transition: all 0.3s ease;
    cursor: pointer;
    animation: moveInUp .5s ease-out .75s;
    back-face-visibility: hidden;
    animation-fill-mode: backwards;
}
 
.btn:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.btn:active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
@media (max-width: 768px) {
    .btn {
        padding: 1rem 2rem;
        font-size: 1rem;
    }
}
</style>