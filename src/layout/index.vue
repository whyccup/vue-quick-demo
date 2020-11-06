<template>
  <div id="layout" style="height: 100%; min-width: 1440px;">
    <f-header></f-header>
    <div id="content">
      <sidebar></sidebar>
      <f-main></f-main>
    </div>
    <f-footer></f-footer>
  </div>
</template>

<script>
import { header, main, footer } from './components'
import sidebar from './components/Sidebar'
export default {
  name: 'layout',
  components: {
    fHeader: header,
    fMain: main,
    fFooter: footer,
    sidebar
  }
}
</script>

<style lang="scss" scoped>
  #content {
    height: 100%;
    padding: 60px $defaultPadding 28px;
    display: flex;
  }
</style>
