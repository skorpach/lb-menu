import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
    state: () => ({
	menuId: null,
	items: []
    }),
    
    getters: {
	totalPrice() {
	    return this.items.reduce((t, i) => t + (i.item.price + i.surcharge) * i.quantity, 0);
	}
    },
    
    actions: {
	addToOrder(item, options, quantity, surcharge=0) {
	    let obj = {item, options, quantity, surcharge};
	    console.log('adding', obj);
	    this.items.push(obj);
	},
	remove(entry) {
	    this.items = this.items.filter(i => i != entry);
	}
    }
});
