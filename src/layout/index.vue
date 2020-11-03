<template>
  <div id="layout">
    <f-header></f-header>
    <f-main></f-main>
    <f-footer></f-footer>
  </div>
</template>

<script>
import { footer, header, main } from './components'
export default {
  name: 'layout',
  components: {
    fFooter: footer,
    fHeader: header,
    fMain: main
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss">
  #layout {
    min-height: 100%;
    display: flex;
  }
</style>
