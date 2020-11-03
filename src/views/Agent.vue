<template>
  <div id="home">

  </div>
</template>

<script>

  export default {
    name: "home",
    data() {
      return {
        value: "",
      };
    },
    // 创建完毕，不用操作文档时使用用
    created() {
      this.$emit("change-Layout", {
        title: "",
        back: 0,
        footer: 1,
        index: 0
      });
    },
    // 文档挂载完毕，操作文档时使用，全部子组件挂载完成，vm.$nextTick
    mounted() {},
    methods: {
      sGoList({
        type,
        value
      }) {
        this.goList("info", {
          [type]: value
        });
      },
      aGoList({
        type,
        value
      }) {
        this.goList("table", {
          [type]: value
        });
      },
      goList(sortType, param) {
        this.$router.push({
          path: "/m/list",
          query: {
            sortType,
            param: JSON.stringify(param),
          },
        });
      },
    },
  };

</script>

<style lang="scss" scoped>

  #m_index {
    height: 100%;
    position: relative;
    padding: 0 15px;
    #title {
      font-size: 20px;
      font-family: STZhongsong;
      color: #333333;
      line-height: 26px;
      padding: 62px 0 42px 0; // 边缘元素不要用margin来处理空白
      text-align: center;
    }

    #search {
      height: 48px;
      border-radius: 6px;
      border: 1px solid #333333;
      margin: 0px auto 0px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      #searchIcon {
        margin: 0 2px 0 9px;
      }

      input {
        width: 100px; 
        flex-grow: 1; // 只有它会挤压后面的元素，但是有了固定宽度就不会了
        height: 22px;
        font-size: 16px;
        line-height: 22px;
        border: none;

        &::-webkit-input-placeholder {
          color: #afafaf;
        }

        &::-moz-placeholder {
          color: #afafaf;
        }

        &:-moz-placeholder {
          color: #afafaf;
        }

        &:-ms-input-placeholder {
          color: #afafaf;
        }
      }

      button {
        height: 100%;
        font-size: 16px;
        // color: $themeColor;
        line-height: 22px;
        border: none;
        border-radius: 0 6px 6px 0;
        border-left: 1px solid #e4e4e4;
        background: none;
        padding: 13px 15px;

        &:active {
          background-color: #e4e4e4;
        }
      }
    }

    .hotWord {
      margin: 31px auto 0 auto; // 和span元素的margin-top共同组成实际空白区域, 设计空白为42px - 不用了，将span放入了div，margin便不会撑开布局div了
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: space-around;

      span {
        font-size: 12px;
        font-weight: 400;
        color: #777777;
        line-height: 17px;
        margin-left: 12px;
        margin-top: 11px;
        &:first-child {
          margin-left: 0;
        }

        &:hover {
          // color: $themeColor;
          cursor: pointer;
        }

        &:active {
          // color: $themeColor;
        }
      }
    }

    .hotWordBottom {
      margin-top: 21px; // 和span元素的margin-top共同组成实际空白区域, 设计空白为32px - 不用了，将span放入了div，margin便不会撑开布局div了
    }

    #download {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 95px;
      left: 0;
      right: 0;

      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }

      a {
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        // color: $themeColor;
        line-height: 14px;
        text-decoration: underline;
      }
    }

    #pdf {
      // @include bg-image("pdf", "svg");
      // color: $themeColor;
    }
  }

</style>
