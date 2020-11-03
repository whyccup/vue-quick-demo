<template>
  <div id="layout">
    <header ></header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
import { footer, header, main } from './components'
export default {
  name: 'layout',
  components: {
    footer,
    header,
    main
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss">
  div {
    box-sizing: border-box; // 让pandding border不占用内部px
  }

  #layout {
    width: 100vw;
    height: 100vh; // 这里会造成背景被固定为屏幕高度。 载入某些超长文档流后，背景不够长。所以要对额外的地方进行重新设定背景高度。
    min-height: 568px; // 当浏览器被键盘挤压，要给一个最小高度值，避免布局混乱
    background-color: #FFFFFF;
  }
</style>
