<script setup>
const props = defineProps(['title', 'image']);
</script>

<template>
<div class="section-hero">
  <img :src="props.image"/>
  <h2 class="sunken">{{props.title}}</h2>
  <div class="description">
    Tap to Expand
  </div>
</div>
</template>

<style>
.section-hero {
    position: relative;
    height: 140px;
    box-sizing: border-box;
    background: linear-gradient(var(--accent-light-corn) var(--accent-dark-corn));
}

.section-hero > img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(0.75) blur(1px);
}

.section-hero > h2 {
    position: absolute;
    bottom: 10px;
    left: 20px;
    margin-right: 20px;
    font-size: 40px;
    pointer-events: none;
}

.section-hero > .description {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    opacity: 1;
    transition: opacity 1s;
}

.section-hero.is-expanded > .description {
    opacity: 0;
}
</style>
