<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
    <!-- Modern geometric shape group -->
    <g :fill="color">
      <!-- Left triangle -->
      <path d="M110 40 L150 90 L70 90 Z"/>
      <!-- Right triangle -->
      <path d="M190 40 L230 90 L150 90 Z"/>
      <!-- Bottom diamond -->
      <path d="M150 70 L190 110 L150 130 L110 110 Z"/>
      <!-- Connecting lines -->
      <path d="M150 90 L150 130" :stroke="color" stroke-width="2" :fill="fill"/>
    </g>
    <!-- Company name -->
    <text x="150" y="160" 
          text-anchor="middle" 
          font-family="Arial, sans-serif" 
          font-size="24" 
          font-weight="bold" 
          :fill="color">
        TERRASCAPE
    </text>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "white", // Default color is white
  },
  fill: {
    type: String,
    default: "none", // Default fill is none
  },
  stroke: {
    type: String,
    default: "none", // Default fill is none
  },
});
</script>