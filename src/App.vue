<template>
  <div id="app">
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      // 解决同一组件路由跳转，数据不刷新问题
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    },
  },
};
</script>
