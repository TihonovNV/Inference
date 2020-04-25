<template>
  <div class="shopping-cart">
    <h1 class="header">Shopping cart</h1>
    <b-card
      :title="item.name"
      :img-src="item.image"
      bg-variant="dark"
      text-variant="white"
      v-for="(item, index) in items"
      :key="index"
      class="mt-1 ml-1 mr-1"
    >
      <b-card-text>{{ "$" + item.price }}</b-card-text>
      <div class="d-flex">
        <b-input-group-prepend>
          <b-button class="form-control" v-on:click="add(index)">+</b-button>
        </b-input-group-prepend>
        <b-form-input
          class="w-25 form-control"
          type="number"
          min="0"
          step="1"
          v-model="item.amount"
        ></b-form-input>
        <b-input-group-append>
          <b-button class="form-control" v-on:click="remove(index)">-</b-button>
        </b-input-group-append>
        <b-button variant="danger" class="ml-auto" v-on:click="delete_item(index); changeCartSize()">Delete item</b-button>
      </div>
    </b-card>
    <h1 class="header" v-if="isCartEmpty()">Your cart is empty</h1>
  </div>
</template>

<script>
import axios from 'axios';
import EventBus from '@/event-bus';

export default {
  name: "app",
  data() {
    return {
      items: []
    };
  },
  methods: {
    add(index) {
      this.items[index].amount = parseInt(this.items[index].amount) + 1;
    },
    remove(index) {
      if (this.items[index].amount > 1)
        this.items[index].amount = parseInt(this.items[index].amount) - 1;
    },
    delete_item(index) {
      this.items.splice(index, 1);
    },
    isCartEmpty: function() {
      return this.items.length == 0;
    },
    changeCartSize: function() {
      EventBus.$emit('cart-size-changed', this.items.length);
      console.log("anime")
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`);

      this.items = res.data;
    } catch (e) {
      console.error(e);
    }
    EventBus.$emit('cart-size-changed', this.items.length);
  }
};
</script>

<style scoped lang="scss">
.shopping-cart {
  background-color: grey;
  position: fixed;
  top: 1;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
.header {
  color: white;
  text-align: center;
}
</style>