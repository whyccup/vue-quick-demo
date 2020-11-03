<template>
  <div id="main">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './Sidebar'

export default {
  name: 'Main',
  components: {
    sidebar
  }
}
</script>

<style lang="scss" scoped>
  #main {
    height: 100%;
    flex: 1;
  }

</style>
