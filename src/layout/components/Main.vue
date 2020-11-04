<template>
  <div id="main">
    <div class="layout">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
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
    .layout {
      height: 100%;
      display: flex;
    }
  }

</style>
