<script setup>
import { computed } from 'vue';

const props = defineProps(['tags', 'icons']);

const groups = computed(() => {
    let ret = [];
    if(!!props.tags && !!props.icons){
	for(const [name, count] of Object.entries(props.tags)){
	    if(count > 0){
		ret.push({
		    src: props.icons[name],
		    count: count
		});
	    }
	}
    }
    return ret;
});
</script>

<template>
<div class="badgeset">
  <span v-for="g in groups">
    <img
      class="badgeset-icon"
      :src="g.src"
      v-for="n in g.count"/>
  </span>
</div>
</template>

<style>
.badgeset > span {
    height: 100%;
}

.badgeset > span > .badgeset-icon {
    margin-inline: 3px;
    height: 100%;
    max-height: 40px;
    top: 0;
    bottom: 0;
}

.badgeset > span > .badgeset-icon:nth-child(n+2) {
    margin-left: -0.5em;
}
</style>
