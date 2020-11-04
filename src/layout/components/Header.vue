<template>
  <div id="header">
    <div class="loyout">
      <img src="@/assets/logo/logo.svg" alt="log">
      <avator></avator>
    </div>
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
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 $defaultPadding;
    background-color: #FFF;
    box-shadow: $defaultShadow;

    .loyout {
      min-width: 1170px;
      display: flex;
      height: 60px;
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
  }
</style>