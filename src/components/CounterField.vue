<script setup>
import { ref } from 'vue';

const props = defineProps([
    'modelValue',
    'min',
    'max'
]);
const emit = defineEmits(['update:modelValue']);

const min = props.min || 0;
const max = props.max;

function changeValue(target){
    target = parseInt(target);
    if(target < min)
	target = min;
    if(!!max && target > max)
	target = max;
    emit('update:modelValue', target);
}
</script>

<template>
<div class="counter">
  <button
    class="hoverstyled"
    @click.stop="changeValue(modelValue - 1)">
    -
  </button>
  <div>
    <input
      class="counter-input"
      inputmode="numeric"
      :min="min"
      :max="max || 'none'"
      :value="modelValue"
      @change="changeValue($event.target.value)"/>
  </div>
  <button
    class="hoverstyled"
    @click.stop="changeValue(modelValue + 1)">
    +
  </button>
</div>
</template>

<style>
.counter {
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    height: 40px;
    max-width: 160px;
    border-radius: 50em;
    overflow: hidden;
}

.counter > button {
    background: var(--c-accent-dark-corn);
    color: white;
    border: none;
    font-weight: bold;
    z-index: 25;
}

.counter .counter-input {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: inset 1px 1px 3px var(--color-shadow);
    text-align: center;
}
</style>
