<script setup>
const props = defineProps(['src']);
</script>

<template>
<div class="parallax" :style="{'background-image': props.src}">
  <slot></slot>
</div>
</template>

<style>
.parallax {
    transform-style: preserve-3d;
    position: relative;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.parallax::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-20px) scale(1.25);
    background: url(@/assets/burger.jpg);
    background-size: cover;
    z-index:-1;
}
</style>
