<template>
  <div>
    <nav class="navbar navbar-light bg-dark navbar-static-top" style="color:white">
      <router-link to="/">Inference</router-link>
      <div style="margin-right: auto">
        <router-link to="/cart">
          <font-awesome-icon icon="shopping-cart" />
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
export default {
  data() {
    return {};
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
  }
};
</script>

<style scoped lang="scss">
</style>