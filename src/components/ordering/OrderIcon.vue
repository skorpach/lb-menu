<script setup>
import orderIcon from '@/assets/orderIcon.png';

const props = defineProps(['active']);
</script>

<template>
<div
  class="order-icon"
  :class="{'is-active': props.active}">
<img :src="orderIcon"/>
</div>
</template>

<style>
.order-icon {
    position: fixed;
    bottom: 5px;
    right: 5px;
    height: 40px;
    width: 40px;
    z-index: 50;
    background: var(--c-accent-light-corn);
    border-radius: 50em;
    box-shadow: black 0px 1px 2px;
    filter: none;

    transition: filter 0.1s;
}

.order-icon.is-active {
    background: var(--c-accent-dark-corn);
}

.order-icon > img {
    height: 60%;
    width: 60%;
    position: relative;
    left: 20%;
    top: 20%;
}

.order-icon:hover {
    filter: brightness(125%);
}

.order-icon:active {
    filter: brightness(75%);
}
</style>
