<template>
  <div id="header">
    <img src="@/assets/logo/logo.svg" alt="log">
    <avator></avator>
  </div>
</template>

<script>
  import avator from '@/components/Avator.vue'

  export default {
    name: 'Header',
    components: {
      avator
    }
  }
</script>

<style lang="scss" scoped>
  #header {
    z-index: $fixedZindex;
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 $defaultPadding;
    background-color: #FFF;
    box-shadow: $defaultShadow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
    }
    img {
      width: 100px;
      height: 35px;
    }
  }
</style>