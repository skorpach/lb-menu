<script setup>
import { useOrderStore } from '@/stores/order';
import { ref, computed, inject } from 'vue';

function optionsList(options) {
    let ret = [];
    for(let k in options){
	if(options[k] && options[k].length > 0)
	    ret.push({name: k, value: options[k].join(',')});
    }
    
    return ret;
}

const order = useOrderStore();
const props = defineProps(['visible']);
const config = inject('config');

const root = ref(null);

defineExpose({root});
</script>

<template>
<div class="orderview" :class="{'is-visible': props.visible}" ref="root">
  <div class="orderview-header">
    <h3>Order Builder</h3>
  </div>
  <div class="orderview-list">
    <div
      class="orderview-list-item"
      v-for="i in order.items">
      <h4>{{ i.quantity > 1 ? `${i.item.name} X${i.quantity}` : i.item.name }}</h4>
      <i>{{ config.formatPrice((i.quantity || 1) * (i.item.price + i.surcharge)) }}</i>
      <div>
	<button class="remove" @click.stop="order.remove(i)">X</button>
      </div>
      <div>
	<p
	  v-for="ol in optionsList(i.options)">
	  {{ ol.name }}: <i>{{ ol.value }}</i>
	</p>
      </div>
    </div>
  </div>
  <div class="orderview-list-total">
    TOTAL: {{ config.formatPrice(order.totalPrice) }}
  </div>
  <div class="orderview-footer">
    <p v-for="x in [1, 2, 3, 4]">{{x}}</p>
  </div>
</div>
</template>

<style>
.orderview {
    background-color: white;
    box-shadow: -2px -1px 6px #222;
    border-radius: 24px 0 0 0;
    position: fixed;
    bottom: -65vh;
    right: 0;
    z-index: 25;
    height: 65vh;
    width: 80vw;
    max-width: 800px;
    display: grid;
    grid-template-rows: 3rem 1fr 50px;
    overflow: hidden;
    transition: bottom ease-out 0.3s;
}

.orderview.is-visible {
    bottom: 0;
}

.orderview-header {
    background: var(--c-accent-darkest);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.orderview-list {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    color: var(--color-text-dark);
    padding: 0 1rem 60px;
    margin-right: 5px;
    overflow-y: scroll;
}

.orderview-list-total {
    position: absolute;
    bottom: 50px;
    right: 0;
    width: 100%;
    height: 40px;
    padding-right: 1rem;
    background-color: #fff6;
    backdrop-filter: blur(4px);
    text-align: right;
    color: var(--color-text-dark);
    font-weight: bold;
}

.orderview-list > .orderview-list-item {
    display: grid;
    grid-template-columns: 1fr 60px 40px;
}

.orderview-list button.remove {
    background-color: #a00;
    color: white;
    border: none;
}

.orderview-list button.remove:hover {
    filter: brightness(120%);
}

.orderview-list button.remove:active {
    filter: brightness(80%);
}

.orderview-footer {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    padding-right: 45px;
    padding-left: 1rem;
    background: white;
    box-shadow: 0px -1px 4px #2228;
}
</style>
