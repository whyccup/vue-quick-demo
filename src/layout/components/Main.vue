<template>
  <div id="main" ref="mainDom">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Main'
}

</script>

<style lang="scss" scoped>
  #main {
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    padding-right: 10px;
    /*滚动条样式*/
    &::-webkit-scrollbar {
        width: 4px;    
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }
  }

</style>
