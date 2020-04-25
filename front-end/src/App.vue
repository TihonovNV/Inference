<template>
  <div>
    <nav class="navbar navbar-light bg-dark navbar-static-top" style="color:white">
      <router-link to="/">Inference</router-link>
      <div style="margin-right: auto">
        <router-link to="/cart">
          <font-awesome-icon icon="shopping-cart" />
          {{this.shoppingCartSize}}
        </router-link>
      </div>
      <div>
        <router-link to="/scanner">
          <font-awesome-icon icon="camera" />
        </router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import EventBus from './event-bus.js';

export default {
  data() {
    return {
      shoppingCartSize: 0
    };
  },
  components: {},
  computed: {
    username() {
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  mounted(){
    EventBus.$on('cart-size-changed', newCartSize => {
      this.shoppingCartSize = newCartSize
    });
  }
};
</script>

<style scoped lang="scss">
</style>