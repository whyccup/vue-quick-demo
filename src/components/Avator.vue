<template>
  <div id="avator" @click="() => {this.dropMenuSwitch = !this.dropMenuSwitch}">
    <div class="avatorButton">
      <div class="avatorImg">
        <img src="@/assets/os_icons/cent_os.png" alt="avator">
      </div>
      <span class="icon icon-angle-up" v-show="dropMenuSwitch"></span>
      <span class="icon icon-angle-down" v-show="!dropMenuSwitch"></span>
    </div>
    <div class="dropMenu" v-show="dropMenuShow">
      <div class="option" @click="() => {this.$router.go(0)}">
        <span class="icon icon-id-card"></span>
        <span>Profile</span>
      </div>
      <div class="option" @click="() => {this.$router.go(0)}">
        <span class="icon icon-sign-in"></span>
        <span>Sign Out</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Avator',
  data () {
    return {
      dropMenuSwitch: false
    }
  },
  computed: {
    dropMenuShow() {
      return !!this.dropMenuSwitch
    } 
  }
}
</script>

<style lang="scss" scoped>
    #avator {
      position: relative;
      cursor: pointer;
      .avatorButton {
        display: flex;
        justify-content: center;
        align-items: center;
        .avatorImg {
          width: 40px;
          height: 40px;
          border-radius: 45px;
          overflow: hidden;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .dropMenu{
        width: 140px;
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 0; 
        background-color: #FFF;
        box-shadow: $defaultShadow;
        .option {
          height: 30px;
          padding-left: 15px;
          text-align: center;
          display: flex;
          align-items: center;
          &:hover {
            background-color: $avatarSelectColor;
            cursor: pointer;
          }
          .icon {
            width: $iconFontSize;
            margin-right: 10px;
          }
        }
      }
    }
</style>
