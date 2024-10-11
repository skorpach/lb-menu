<script setup>
import { ref, computed, inject } from 'vue';
import { blackIcons } from '@/assets/badges';
import BadgeSet from '@/components/BadgeSet.vue';

const props = defineProps(['name', 'price', 'summary', 'id', 'badges']);
const config = inject('config', {});

const fancyPrice = computed(() => `\$${props.price.toFixed(2)}`);
const showDescription = computed(() => config.showItemSummary
				 && !!props.summary
				 && props.summary.length > 1);

const symbolSrc = computed(() => badges(props.badges, 'black'));
</script>

<template>
<div class="menuitem" :class="{'is-menuitem-id-visible': config.showItemIds}">
  <div class="menuitem-number" v-if="config.showItemIds">
    {{props.id}}
  </div>
  <div class="menuitem-name">
    <span>
      <h4 class="menuitem-title">{{props.name}}</h4>
      <BadgeSet
	class="badgeset-simple-item"
	:tags="props.badges"
	:icons="blackIcons" />
    </span>
    <p class="description" v-if="showDescription">{{props.summary}}</p>
  </div>
  <div class="menuitem-price">
    <p>{{fancyPrice}}</p>
  </div>
</div>
</template>

<style lang="scss">
@use "@/assets/default_theme" as theme;

.menuitem {
    @include theme.item-shadow;
    
    display: grid;
    grid-template-columns: 1fr 60px;
    gap: 10px;
    padding: 2px 8px;
    
    &.is-menuitem-id-visible {
	grid-template-columns: 30px 1fr 60px;
    }
    
    &:active {
	background: var(--color-background-active);
	transition: background 0.1s;
    }
    
    .symbol {
	height: 1em;
    }
    
    > .menuitem-title {
	font-size: 1.25rem;
	font-weight: normal;
	display: inline;
	margin-right: 2px;
    }
    
    > .menuitem-number {
	color: var(--c-accent-darker-60);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    }
    
    > .menuitem-name {
	display: flex;
	flex-direction: column;
	margin: 0;
	
	> span {
	    display: flex;
	    gap: 5px;
	    align-items: baseline;
	}
    }
    
    .menuitem-price {
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-style: italic;
	text-align: right;
    }
}

.badgeset.badgeset-simple-item {
    height: 16px;
    align-self: center;
}

.description {
    &.description-dark {
	color: var(--color-text);
    }
    
    &.description-light {
	color: var(--color-text-dark);
    }
}
</style>
