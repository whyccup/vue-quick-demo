<template>
  <div id="agent">
    <div class="top">
      <div class="block build">
        <span class="title">Building</span>
        <div class="icon">
          <span class="icon-cog icon-with-anmaition anmaition-rotate"></span>
        </div>
        <span class="number">3</span>
      </div>
      <div class="block idle">
        <span class="title">Idle</span>
        <span class="icon icon-coffee"></span>
        <span class="number">5</span>
      </div>
      <div class="block statis">
        <div class="column">
          <div class="th">ALL</div>
          <div class="cont">8</div>
        </div>
        <div class="column">
          <div class="th">PHYSICAL</div>
          <div class="cont">4</div>
        </div>
        <div class="column">
          <div class="th">VIRTUAL</div>
          <div class="cont">4</div>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="left">
        <div class="type active">All</div>
        <div class="type">Physical</div>
        <div class="type">Virtual</div>
        <div class="search">
          <span class="icon icon-search"></span>
          <input type="search" v-model="search">
        </div>
      </div>
      <div class="right">
        <span class="icon icon-th-card"></span>
        <span class="icon icon-th-list active"></span>
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
  @import '~@/assets/styles/anmaition-rotate.scss';

  #agent {
    flex: 1; // 因为main设置了flex
    min-width: 857px;
    padding-top: 18px;
    .top {
      display: flex;
      justify-content: space-between;
      .block {
        display: inline-block;
        flex: 1;
        min-width: 270px;
        height: 115px;
        margin-right: 30px;
        color: #FFF;
        position: relative;
        overflow: hidden;
        cursor: default;
        .title {
          position: absolute;
          top: 18px;
          left: 10px;
          z-index: 2;
          font-size: $topBlockTitleFontSize;
          font-weight: $topBlockTitleWeight;
        }
        .icon {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          font-size: $topBlockIconSize;
          opacity: $topBlockIconOpacity;
        }
        .number {
          position: absolute;
          bottom:20px;
          right: 25px;
          z-index: 2;
          font-size: $topBlockNumberFontSize;
        }

      }
      .build {
        background-color: $buildColor;
        .icon-with-anmaition {
          display: block;
        }
      }
      .idle {
        background-color: $idleColor;
      }
      .statis{
        margin: 0;
        background-color: #FFF;
        color: $defaultColor;
        display: flex;
        padding-top: 22px;
        .column {
          height: 100%;
          flex: 1;
          .th {
            margin-bottom: 35px;
            text-align: center;
            font-size: $statisTitleFontSize;
          }
          .cont {
            text-align: center;
            font-size: $statisNumberFontSize;
          }
        }
      }
    }
    .menu {
      height: $menuHeight;
      padding-right: 25px;
      margin-top: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #FFF;
      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .type {
          width: 82px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-right: 1px solid $bgGrey;
          cursor: pointer;
          &:active {
            background-color: $bgGrey;
            opacity: 0.8;
          }
        }
        .active {
          color: $hoverColor;
          border-bottom: $menuBorder;
        }
        .search {
          height: 100%;
          padding: 8px 8px; 
          margin: 0px 30px;
          display: inline-flex;
          align-items: center;
          background-color: $bgGrey;
          .icon {
            font-size: $sidebarIconFontSize;
            margin-right: 10px;
          }
          input {
            border: none;
            outline: none;
            background-color: $bgGrey;
            font-size: $defaultFontSize;
          }
        }
      }
      .right {
        span {
          margin-right: 20px;
          font-size: $sidebarIconFontSize;
          cursor: pointer;
          &:last-child {
            margin: 0;
          }
          &:active {
            opacity: 0.8;
          }
        }
        .active {
          color: $hoverColor;
        }
      }
    }
  
  }

</style>
