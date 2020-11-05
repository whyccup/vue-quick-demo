<template>
  <div id="sidebar">
    <div class="items">
      <sidebarItem v-for="(el, index) of menuForItem" :key="index" :opts="el" @siderBarItemClick="siderBarItemClick"></sidebarItem>
    </div>
    <div>
      <div class="ulTitle">History</div>
      <ul @click="bubbleClick">
        <li v-for="(el, index) of history" :key="index"><span>{{el}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import sidebarItem from './SidebarItem'

  export default {
    name: 'sidebar',
    components: {
      sidebarItem
    },
    data() {
      return {
        menu: [{
            icon: 'icon-dashboard',
            name: 'dashboard'
          },
          {
            icon: 'icon-sitemap',
            name: 'agent'
          },
          {
            icon: 'icon-boat',
            name: 'my cruise'
          },
          {
            icon: 'icon-life-bouy',
            name: 'help'
          }
        ]
      }
    },
    computed: {
      history() {
        const history = sessionStorage.history
        return history ? JSON.parse(history) : []
      },
      menuForItem() {
        const menu = [...this.menu]
        // 检查哪个菜单现在是被选中状态
        for (const el of menu) {
          if (el.name.trim() === this.$route.name) el.active = true
        }
        return menu
      }
    },
    methods: {
      bubbleClick(e) {
        const fullPath = e.target.textContent
        if (e.target.tagName === 'LI' && this.$route.fullPath !== fullPath) this.$router.push(fullPath)
      },
      siderBarItemClick(opts) {
        console.log(opts)
      } 
    }
  }
</script>

<style lang="scss" scoped>
  #sidebar {
    height: 100%;
    width: 270px;
    min-width: 270px;
    padding: 30px 0 20px 0;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $sidebarColor;

    .ulTitle {
      color: $historyTitleColor;
      font-size: $historyTitleFontSize;
      margin: 20px 15px;
      cursor: default;
    }

    ul {
      margin: 0;

      li {
        color: $historyItemColor;
        font-size: $historyItemFontSize;
        cursor: pointer;
        margin-bottom: 12px;

        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &:hover {
          color: $themeColor;
        }
      }
    }
  }
</style>