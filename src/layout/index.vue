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
  }
}
</script>
