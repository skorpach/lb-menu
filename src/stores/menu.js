import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Import dummy menu data
import menuData from '@/assets/menudata';

export const useMenuStore = defineStore('menu', () => {
    const active = ref(null);

    function loadMenu(menuId){
	throw 'Not implemented';
    }

    active.value = menuData; // Set to dummy menu data

    return {active};
});
