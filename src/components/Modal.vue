<script setup>
import { computed } from 'vue';

const props = defineProps([
    'title', 
    'image',
]);

const emit = defineEmits(['close']);
</script>

<template>
<div class="dmodal-blocker" @click.stop="$emit('close')">
  <div class="dmodal" @click.stop="">
    <div class="sm-button sm-close" @click.stop="$emit('close')">
      &times;
    </div>
    <div class="dmodal-header">
      <img :src="props.image" v-if="props.image"/>
      <div class="dmodal-titlebar">
	<h3>{{props.title}}</h3>
      </div>
    </div>
    <div class="dmodal-content">
      <slot>
      </slot>
    </div>
    <div class="dmodal-button-container">
      <slot name="buttons">
      </slot>
    </div>
  </div>
</div>
</template>

<style lang="scss">
@use "@/assets/default_theme" as theme;

.dmodal-blocker {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: #00000044;
    backdrop-filter: blur(10px);
    z-index: 100;
}

.dmodal {
    @include theme.item-shadow;
    
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    width: 80%;
    max-width: 600px;
    max-height: 600px;
    border-radius: 2.5rem;
    overflow: hidden;
    opacity: 1;
    
    animation-duration: 0.25s;
    animation-name: slidein;
    
    > .dmodal-header {
	height: 140px;
	
	> img {
	    position: absolute;
	    height: 100%;
	    width: 100%;
	    object-fit: cover;
	}
    }
    
    > .dmodal-header > .dmodal-titlebar {
	position: absolute;
	bottom: 0;
	left: 0;
	padding-inline: 4ch;
	color: white;
	border-radius: 0 20px 0 0;
    }
    
    > .dmodal-content {
	padding: 2.5rem;
	padding-top: 1rem;
    }
    
    > .dmodal-button-container {
	position: absolute;
	bottom: 10px;
	right: 10px;
	display: flex;
	flex-flow: row reverse nowrap;
	justify-content: end;
    }
}

@keyframes slidein {
    from {
	margin-top: 40px;
	opacity: 0;
    }

    to {
	margin-top: 0px;
	opacity: 1;
    }
}

.sm-button.sm-close {
    @include theme.bright-hover;
    height: 0.8em;
    width: 0.8em;
    border-radius: 50%;
    border: solid 1px black;
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.2em;
    box-shadow: 0 1px 3px black;
    user-select: none;
    background: #c83826;
    color: white;
    z-index: 4;
}

.dmodal {
    background: white;
    color: var(--color-text);
}

.dmodal > .dmodal-header {
    background: var(--color-label-bg-dark);
}

.dmodal > .dmodal-header > .dmodal-titlebar {
    background: var(--color-label-bg-dark);
}
</style>
