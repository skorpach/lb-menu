<script setup>
import { computed, ref, onMounted } from 'vue';

const props = defineProps(['optionSet']);

const inputType = computed(() => props.optionSet.select == 'single' ? 'radio' : 'checkbox');
const options = ref(null);
const value = computed(() => options.value
		       .filter(o => o.selected)
		       .map(o => o.name));
const name = computed(() => props.optionSet.name);
const surcharge = computed(() => options.value
			   .filter(o => o.selected)
			   .reduce((s, x) => s + (x.price || 0), 0));

defineExpose({value, name, surcharge});

onMounted(() => {
    options.value = props.optionSet.options.map(o => ({
	name: o.name,
	price: o.price,
	selected: false
    }));
});
</script>

<template>
<h4>{{name}}</h4>
<form>
  <div class="order-options--grid">
    <template v-for="o in options">
      <div>
	{{o.name}}
      </div>
      <div>
	<input name="options" :type="inputType" v-model="o.selected"/>
      </div>
    </template>
  </div>
</form>
</template>

<style>
.order-options--grid {
    display: grid;
    grid-template-columns: 1fr 25%;
}
</style>
