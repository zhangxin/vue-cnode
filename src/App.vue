<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
#html,
body {
  #app {
    background-color: #e1e1e1;
  }
}
</style>
