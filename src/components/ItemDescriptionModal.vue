<script setup>
import { inject, computed } from 'vue';
import { colorIcons } from '@/assets/badges';
import Modal from '@/components/Modal.vue';
import BadgeSet from '@/components/BadgeSet.vue';
import AddButton from '@/components/ordering/AddButton.vue';

const props = defineProps(['item']);
const emit = defineEmits(['addToOrder']);

const config = inject('config');
const order = inject('order');

const visibleOptionSets = computed(() => props.item.options.filter(
    o => !o.hidden));

let formatPrice = config.formatPrice;
</script>

<template>
<Modal :v-bind="props">
  <div class="description-modal-content" v-if="props.item">
    <div>
      <i><h4>{{formatPrice(props.item.price)}}</h4></i>
      <p>
	{{props.item.description || props.item.summary}}
      </p>
      <p>
	<i v-if="props.item.note">
	  {{props.item.note}}
	</i>
      </p>
    </div>
    <div class="dmodal-options" v-if="props.item.options && props.item.options.length > 0">
      <template v-for="oSet in visibleOptionSets">
	<h4>{{oSet.name}}</h4>
	<div v-for="o in oSet.options">
	  <div>{{o.name}}</div>
	  <div class="dmodal-opt-spacer"></div>
	  <div v-if="o.price">{{formatPrice(o.price)}}</div>
	</div>
      </template>
    </div>
    <div class="dmodal-badges">
      <BadgeSet :tags="props.item.badges" :icons="colorIcons"/>
    </div>
  </div>

  <template #buttons>
    <AddButton
      :item="props.item"
      v-if="config.enableOrderBuilder"
      @click.stop="emit('addToOrder', props.item)">
      Add to Order
    </AddButton>
  </template>
</Modal>
</template>

<style>
.description-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.description-modal-content > .dmodal-options {
    /* align-self: center; */
    width: 200px;
}

.description-modal-content > .dmodal-options > div {
    display: flex;
}

.description-modal-content .dmodal-opt-spacer {
    border-bottom: dotted 1px black;
    flex-grow: 1;
}

.dmodal-badges {
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.dmodal-badges > .badgeset {
    height: 100%;
}
</style>
