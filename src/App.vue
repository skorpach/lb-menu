<script setup>
import { provide, ref, onMounted, watch } from 'vue';
import ParallaxSplash from '@/components/ParallaxSplash.vue';
import Menu from '@/components/Menu.vue';
import OrderIcon from '@/components/ordering/OrderIcon.vue';
import OrderReview from '@/components/ordering/OrderReview.vue';
import { useRestaurantStore } from '@/stores/restaurant';
import defaults from '@/defaults'

const resto = useRestaurantStore();

watch(resto.details.name, async (name) => {
    document.title = `Project Lunchbox: ${name}`;
});

const config = resto.config;
provide('config', config);

provide('getAsset', resto.getAsset);

const showReview = ref(false);

const orderReviewRef = ref(null);

function onBodyClick(event){
    if(!orderReviewRef.value || !orderReviewRef.value.root.contains(event.target))
	showReview.value = false;
}

onMounted(() => {
    document.body.addEventListener('click', onBodyClick);
});
</script>

<template>
<header class="app-header">
  <div class="header-logo">
    <a :href="defaults.dummyUrl">
      <img :src="resto.assets.logo"/>
    </a>
  </div>
  <h3>MENU</h3>
  <div v-if="config.showMenuOptions">Options</div>
</header>
<main>
  <Menu :sections="resto.menu" :accordion="config.accordion"/>
</main>
<footer class="app-footer" v-if="config.showMenuFooter">
  <em>Powered by</em>
  <!-- <img class="app-footer-logo" src="@/assets/logo_white.svg"/> -->
  <OrderIcon
    v-if="config.enableOrderBuilder"
    :active="showReview"
    @click.stop="showReview = !showReview" />
  <OrderReview :visible="showReview" ref="orderReviewRef"/>
</footer>
</template>

<style>
#app {
    display: block;
    --footer-height: 32px;
    --header-height: 48px;
    padding-bottom: var(--footer-height);
    padding-top: var(--header-height);
}

#app > .app-header {
    position: fixed;
    top: 0;
    left: 0;
    height: var(--header-height);
    width: 100%;
    z-index: 125;
    padding-inline: 20px;
    padding-block: 2px;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    text-align: center;
    font-weight: bold;
}

#app > .app-header > * {
    max-height: var(--header-height);
}

.header-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    height: 100%;
}

.header-logo > * {
    height: 100%;
    width: 100%;
}

.header-logo > *:hover {
    background: none;
}

.header-logo img {
    height: 100%;
    max-width: 100%;
    object-position: center;
    object-fit: contain;
}

.header-logo > *:hover > img {
    filter: brightness(1.25);
}

#app > .app-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--footer-height);
    padding-block: 5px;
    z-index: 125;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
}

#app > .app-footer > .app-footer-logo {
    height: 16px;
    padding-left: 10px;
}
</style>
