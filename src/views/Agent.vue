<template>
  <div id="agent">
    <div class="top">
      <div class="block build">
        <span class="title">Building</span>
        <span class="icon icon-cog animation-cog"></span>
        <span class="number">3</span>
      </div>
      <div class="block idle">
        <span class="title">Idle</span>
        <span class="icon icon-coffee"></span>
        <span class="number">5</span>
      </div>
      <table class="block statis">
        <tr>
          <tt>ALL</tt>
          <td>8</td>
        </tr>
        <tr>
          <tt>PHYSICAL</tt>
          <td>4</td>
        </tr>
        <tr>
          <tt>VIRTUAL</tt>
          <td>4</td>
        </tr>
      </table>
    </div>
    <div class="menu">
      <div class="left">
        <div class="type">All</div>
        <div class="type">Physical</div>
        <div class="type">Virtual</div>
        <div class="input">
          <span class="icon icon-search"></span>
          <input type="search" v-model="search">
        </div>
      </div>
      <div class="right">
        <span class="icon icon-th-card"></span>
        <span class="icon icon-th-list"></span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "agent",
    data() {
      return {
        search: ''
      };
    }
  };

</script>

<style lang="scss" scoped>
  #agent {
    flex: 1; // 因为main设置了flex
    min-width: 857px;
    padding-top: 18px;
    .top {
      display: flex;
      justify-content: space-between;
      .block {
        width: 270px;
        height: 115px;
        display: inline-block;
        color: #FFF;
        .title {
          font-size: $topBlockTitleFontSize;
          font-weight: $topBlockTitleWeight;
        }
        .icon {
          font-size: $topBlockIconSize;
          opacity: $topBlockIconOpacity;
        }
        .number {
          font-size: $topBlockNumberFontSize;
        }
        table {
          tr {
            tt {
              font-size: $statisTitleFontSize;
            }
            td {
              font-size: $statisNumberFontSize;
            }
          }
        }
      }
      .build {
        background-color: $buildColor;
      }
      .idle {
        background-color: $idleColor;
      }
    }
  }

</style>
