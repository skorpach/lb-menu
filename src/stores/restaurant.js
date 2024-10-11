import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Import dummy menu data
import data from '@/assets/menudata';

export const useRestaurantStore = defineStore('restaurant', () => {
    const config = ref(data.config);
    const menu = ref(data.menu);
    const details = ref(data.details);
    const discounts = ref(null);
    const assets = ref({
	logo: data.assets.logo,
	images: data.assets
    });

    function getAsset(assetName){
	return assets.value.images[assetName] || null;
    }
    
    function loadMenu(menuId){
	throw 'Not implemented';
    }

    return { config, menu, details, assets, discounts, getAsset };
});
