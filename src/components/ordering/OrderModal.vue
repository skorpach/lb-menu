<script setup>
import { ref } from 'vue';
import { useOrderStore } from '@/stores/order';
import Modal from '@/components/Modal.vue';
import OrderOptions from '@/components/ordering/OrderOptions.vue';
import AddButton from '@/components/ordering/AddButton.vue';
import CounterField from '@/components/CounterField.vue';

const order = useOrderStore();
const props = defineProps(['item']);
const emit = defineEmits(['close']);

const quant = ref(1);
const optionRefs = ref([]);

function addToOrder(){
    let options = {};
    let surcharge = 0;

    for(let o of optionRefs.value){
	options[o.name] = o.value;
	surcharge += o.surcharge;
    }
    
    order.addToOrder(props.item, options, quant.value, surcharge);
    emit('close');
}
</script>

<template>
<Modal @close="$emit('close')">
  <h2 class="order-modal-header">Adding to order</h2>
  <div v-for="os in props.item.options">
    <OrderOptions :optionSet="os" ref="optionRefs" />
  </div>
  <div>
    <h4>Quantity</h4>
    <CounterField min="1" max="10" v-model="quant"/>
  </div>
  <template #buttons>
    <AddButton @click="addToOrder">Add to Order</AddButton>
  </template>
</Modal>
</template>

<style>
.order-modal-header {
    color: var(--c-accent-dark-corn);
}
</style>
