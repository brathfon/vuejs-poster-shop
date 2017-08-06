'use strict';

new Vue({

  el: '#app',

  data: {

    total: 0,

    items: [
      { id: 1, title: 'Item 1', price: 8.80 },
      { id: 2, title: 'Item 2', price: 18.80  },
      { id: 3, title: 'Item 3', price: 4.80 }
    ],

    cart: [],

  },

  methods: {

    addItem(index) {

      // Cart Total Cost
      this.total += 9.99;

      const item = this.items[index];

      // Is the item already on the list?
      let found = false;

      // Let's loop through the cart to check that
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          this.cart[i].qty++;
          found = true;
        }
      }

      // If it was found, just update the quantity
      if (!found) {
        this.cart.push({
          id: item.id, 
          title: item.title,
          qty: 1,
          price: item.price,
        });
      }

    }

  }

});
