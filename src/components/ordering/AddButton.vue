<script setup>
import { inject } from 'vue';

const props = defineProps(['item']);

const config = inject('config');
const order = inject('order');

function addToOrder(){
    console.log(props.item);
}
</script>

<template>
  <div v-if="config.enableOrderBuilder">
    <button
      class="order-add-button hoverstyled">
      <slot>
	&plus;
      </slot>
    </button>
  </div>
</template>

<style>
.order-add-button {
    border-radius: 50em;
    border: none;
    background: var(--c-accent-dark-corn);
    color: white;
    margin: 0;
    padding: 0.75rem;
    box-shadow: 1px 0px 2px black;

    /* filter: none; */
    /* box-shadow: none; */
    /* transition: filter 0.1s */
    /* 		box-shadow 0.1s; */
}

/* .order-add-button:hover { */
/*     filter: brightness(125%); */
/* } */

/* .order-add-button:active { */
/*     box-shadow: 1px 2px 4px inset #0008; */
/* } */
</style>
