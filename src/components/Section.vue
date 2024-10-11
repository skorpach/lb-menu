<script setup>
import { ref } from 'vue';

import SectionHero from '@/components/SectionHero.vue';
import SimpleMenuItem from '@/components/SimpleMenuItem.vue';

const props = defineProps(['title', 'image', 'expanded', 'description']);
const emit = defineEmits(['activate']);

const headerEl = ref();

function toggleVisible($event){
    emit('activate', !props.expanded);
    if(!props.expanded)
	setTimeout(() => {
	    $event.target.scrollIntoView({behavior: 'smooth'});
	}, 250);
}
</script>

<template>
<SectionHero
  class="section"
  :class="{'is-expanded': props.expanded}"
  v-bind="props"
  @click.prevent="toggleVisible"
  ref="headerEl"/>
<div>
  <Transition name="section-collapsing">
    <div class="section-content" v-if="props.expanded">
      <div class="section-description" v-if="props.description">
	<p class="description description-dark">
	  {{props.description}}
	</p>
      </div>
      <slot></slot>
    </div>
  </Transition>
  </div>
</template>

<style>
/* .section {} */

.section-content {
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
    margin: 0;
    padding-inline: 10px;
}

.section-content > .section-description {
    margin-inline: auto;
    padding-inline: 2rem;
    text-align: center;
    max-width: 600px;
}

.section-collapsing-enter-active {
    transition: opacity 0.25s ease-out 0.15s;
}

.section-collapsing-enter-from,
.section-collapsing-leave-to {
    opacity: 0;
}
</style>
