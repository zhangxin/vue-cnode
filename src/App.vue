<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <PostList></PostList>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import PostList from  './components/PostList'

export default {
  name: 'App',
  components: {
    Header,
    PostList
  }

}
</script>
<style lang="scss" scoped>
  #html,
  body {
    
    #app {
      background-color: #e1e1e1;
    }
  }
</style>
