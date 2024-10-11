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

<style lang="scss">
  @use "@/assets/default_theme" as theme;
  
.section-hero {
    position: relative;
    height: 140px;
    box-sizing: border-box;
    background: linear-gradient(--color-hero-background-grad);
    
    > img {
	@include theme.background-image;
    }
    
    > h2 {
	position: absolute;
	bottom: 10px;
	left: 20px;
	margin-right: 20px;
	font-size: 40px;
	pointer-events: none;
    }
    
    > .description {
	position: absolute;
	bottom: 2px;
	left: 50%;
	transform: translate(-50%, 0);
	color: white;
	opacity: 1;
	transition: opacity 1s;
    }
    
    &.is-expanded > .description {
	opacity: 0;
    }
}
</style>
