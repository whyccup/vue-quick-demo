<template>
  <div id="footer" disabled>
    &copy; Copyright 2017 <strong>Thought</strong>Works
  </div>
</template>

<script>

export default {
  name: 'Footer'
}

</script>

<style lang="scss" scoped>
  #footer {
    min-width: 1440px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    box-shadow: 0px -3px 5px 0px rgba($color: #000000, $alpha: 0.2);;
    text-align: center;
    background-color: #FFF;
  }
</style>
