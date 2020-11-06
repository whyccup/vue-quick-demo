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
    min-width: 1440px;
    position: absolute;
    top: 60px;
    bottom: 28px;
    left: 0;
    right: 0;
    padding: 0 $defaultPadding;
    display: flex;
    overflow: auto;
    &::before { // 给sidebar占位
      content: '';
      min-width: 270px;
      margin-right: 30px;
    }
  }

</style>
