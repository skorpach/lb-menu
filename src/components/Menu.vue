<script setup>
import SimpleMenuItem from '@/components/SimpleMenuItem.vue';
import SectionHero from '@/components/SectionHero.vue';
import SubsectionHeader from '@/components/SubsectionHeader.vue';
import Section from '@/components/Section.vue';
import SubSection from '@/components/SubSection.vue';
import ItemDescriptionModal from '@/components/ItemDescriptionModal.vue';
import OrderModal from '@/components/ordering/OrderModal.vue';

import { useScreen } from 'vue-screen';
import { ref, computed, watch, provide } from 'vue';

const props = defineProps(['sections', 'accordion']);

const screen = useScreen();
const sectionSelected = ref(null);
const itemSelected = ref(null);
const itemAdding = ref(null);
const mobileAspect = computed(() => screen.width < 1000);

provide('order', {});

watch(mobileAspect, aspect => console.log(aspect ? 'mobile' : 'desktop'));

function selectSection(sIndex, active){
    if(active)
	sectionSelected.value = sIndex;
    else
	sectionSelected.value = null;
}

function selectItem(item){
    itemSelected.value = item;
}

function addToOrder(item){
    selectItem(null);
    itemAdding.value = item;
}

function sectionExpanded(sectIndex){
    return !mobileAspect.value || !props.accordion || sectIndex == sectionSelected.value;
}
</script>

<template>
<div class="menu-content-area" :class="{'is-modal-active': itemSelected }">
  <Section
    v-for="(s, si) in props.sections"
    :title="s.title" :image="s.image" :description="s.description"
    :expanded="sectionExpanded(si)"
    @activate="act => selectSection(si, act)">
    <SimpleMenuItem
      v-for="i in s.items"
      v-bind="i"
      @click.prevent="selectSection(si, true); selectItem(i)" />
    <SubSection
      v-for="ss in s.subsections"
      :title="ss.title"
      :description="ss.description" >
      <SimpleMenuItem
	v-for="i in ss.items"
	v-bind="i"
	@click.prevent="selectSection(si, true); selectItem(i)" />
    </SubSection>
  </Section>
</div>
<ItemDescriptionModal
  :item="itemSelected"
  :title="itemSelected.name"
  :image="itemSelected.image || props.sections[sectionSelected].image"
  v-if="itemSelected"
  @close="selectItem(null)"
  @addToOrder="addToOrder" />
<OrderModal
  v-if="itemAdding"
  :item="itemAdding"
  :title="itemAdding.name"
  :image="itemAdding.image || props.sections[sectionSelected].image"
  @close="addToOrder(null)"/>
</template>

<style>
.menu-scroll-container {

}

.menu-content-area {
    display: flex;
    flex-direction: column;
    gap: 3px;
    background: #201f27;
    padding-block: 4px;
    transition: filter 0.25s;
}
</style>
