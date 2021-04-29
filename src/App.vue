<template>
  <div id="app">
    <Header></Header>
    <div class="main clearfix">
      <router-view name="aside"></router-view>
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
$mainWidth: 1600px;

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.main {
  max-width: $mainWidth;
  margin-left: auto;
  margin-right: auto;

  .sidebar {
    margin-right: 8px;
    float: right;
  }
  .article-wrapper {
    margin-right: 350px;
  }

  @media screen and (max-width: "880px") {
    .article-wrapper {
      margin-right: 0;
    }
    .topiclist-wrapper {
      padding: 0 3px;
    }
    .sidebar {
      display: none;
    }
  }
}
</style>
