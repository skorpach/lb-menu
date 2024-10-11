<script setup>
import SubsectionHeader from '@/components/SubsectionHeader.vue';

const props = defineProps(['title', 'description']);
</script>

<template>
<div class="subsection">
  <SubsectionHeader :title="props.title" />
  <div class="subsection-description" v-if="props.description">
    <p class="description description-dark">
      {{props.description}}
    </p>
  </div>
  <div class="subsection-itemcontainer">
    <slot></slot>
  </div>
</div>
</template>

<style>
.subsection {
    display: flex;
    flex-flow: column nowrap;
    margin-block: 2px;
}

.subsection > .subsection-itemcontainer {
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
}

.subsection > .subsection-description {
    margin-inline: auto;
    padding-inline: 2rem;
    text-align: center;
    max-width: 600px;
}

@media(min-width: 1000px){
    .subsection > .subsection-itemcontainer {
	flex-flow: row wrap;
	justify-content: start;
	gap: 20px;
    }

    .subsection > .subsection-itemcontainer > * {
	flex: 35% 1 0;
	max-width: calc(50% - 10px);
	box-sizing: border-box;
    }
}
</style>
