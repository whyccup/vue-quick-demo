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
    position: absolute;
    top: 60px;
    bottom: 28px;
    left: 0;
    right: 0;
    padding: 0 $defaultPadding;
    display: flex;
  }

</style>
