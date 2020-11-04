<template>
  <div :class="`sidebarItem ${opts.active ? 'active' : ''}`" @click="() => {this.$emit('siderBarItemClick', opts)}">
    <span :class="`icon ${opts.icon}`"></span>
    <span class="name"> {{name}} </span>
  </div>
</template>

<script>

export default {
  name: 'sidebarItem',
  props: ['opts'],
  computed: {
    name() {
      return this.opts.name.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebarItem {
    height: $sidebarItemHeight;
    color: #FFF;
    padding-left: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon {
      font-size: $sidebarIconFontSize;
      margin-right: 15px;
    }
    &:hover {
      color: $hoverColor;
    }
  }

  .active {
    color: $hoverColor;
    background-color: $sidebarActiveColor;
  }
</style>
