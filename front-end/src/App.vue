<template>
  <div>
    <link rel="stylesheet" type="text/css" href="/static/bootstrap.min.css">
    <tbody valign="baseline">
      <tr v-if="isCartEmpty(items)">
        Your cart is empty
      </tr>
      <tr v-else style="shopping-cart" v-for="item in items" v-bind:key="item">
        <td>{{ item.name }}</td>
        <td>${{ item.price }}</td>
        <td> <button v-on:click="add(item)">+</button> </td>
        <input type="number" min="0" step="1" v-model="item.amount">
        <td> <button v-on:click="remove(items, item)">-</button> </td>
        <td> <button v-on:click="delete_item(items, item)">Delete item</button> </td>
      </tr>
    </tbody>
    <video id="video" width="640" height="480" autoplay>р</video>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      items: [
        {
          name: "First",
          id: 1,
          price: 9,
          amount: 1
        },
        {
          name: "Second",
          id: 2,
          price: 19,
          amount: 2
        },
        {
          name: "Third",
          id: 3,
          price: 29,
          amount: 3
        }
      ]
    }
  },
  methods:{
    init(){
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          //video.play();
        });
      }
    },
    add(item) {
      item.amount = parseInt(item.amount) + 1;
    },
    remove(items, item) {
      if(item.amount > 1)
        item.amount = parseInt(item.amount) - 1;
    },
    delete_item(items, item) {
      for( var i = 0; i < items.length; i++){ 
        if (items[i] === item)
          items.splice(i, 1); 
      }
    },
    isCartEmpty: function(items){
      return items.length == 0
    }
  },
  beforeMount(){
    this.init()
  }
};
</script>

<style scoped lang="scss">
.shopping-cart{
  align-items: "center";
}
</style>