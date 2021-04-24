<template>
  <div id="app">
    <Header></Header>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }

}
</script>
<style lang="scss" scoped>
  #html,
  body {
    * {
      margin: 0;
      padding: 0;
    }
  }
</style>
