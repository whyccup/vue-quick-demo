<template>
<div class="shadowDialog">
    <div :class="uper ? 'dialog uper' : 'dialog'" ref="popUp">
            <span class="close icon-close" @click="cancel"></span>
            <div class="title">Separate multiple resource name whith commas</div>
            <div class="input"><input type="text" v-model="data"></div>
            <div class="buttonGroup">
                <button class="add" @click="changeResource">Add Resource</button>
                <button class="cancel" @click="cancel">Cancel</button>
        </div>
    </div>
    <div class="shadow" @click="cancel"></div>
</div>

</template>

<script>
    export default {
        name: 'Dialog',
        props: ['opts'],
        data() {
            return {
                data: this.opts,
                uper: false
            }
        },
        methods: {
            changeResource() {
                let resourcesArray = this.data.replace(/，/ig, ',').split(',') // 中文逗号转英文
                resourcesArray = Array.from(new Set(resourcesArray)).filter(el => el && el.trim()) // 去重及空值
                this.$emit('add', resourcesArray) // 给父组件上报修改
                this.data = resourcesArray.join(',') // 修改本组件值
            },
            cancel() {
                this.$emit('close')
            },
            // to do 这里要拿 provide inject 写个插件，跨层级获取到MainDom，再进行准确计算，以下是粗略计算
            checkThisVisible () {
                const itemDom = this.$refs.popUp 
                // 可见区域顶部高度
                const visibleTop = window.scrollY;
                // 可见区域底部高度 = 滚动条高度 + 视窗高度
                const visibleBottom = visibleTop + document.documentElement.clientHeight;
                // 节点的中心高度
                const realOffsetTop = this.getDomRealOffsetTop(itemDom)
                const centerY = realOffsetTop + itemDom.offsetHeight
                this.uper = centerY > visibleBottom
            },
            getDomRealOffsetTop(dom, offsetTop = 0) { // 递归获取元素的绝对位置
                offsetTop += dom.offsetTop
                if (dom.offsetParent.localName === 'body') return offsetTop
                return this.getDomRealOffsetTop(dom.offsetParent, offsetTop) // 每次递归都要将值进行返回
            }
        },
        mounted() {
            // 检查组件是否在视窗内
            this.checkThisVisible()
            
        },
        beforeDestroy() {
            this.data = null
        }
    }
</script>

<style lang="scss" scoped>
    .dialog {
        position: absolute;
        top: calc(100% + 18px) ;
        left: -18px;
        z-index: $dialogZIndex;
        width: $popupWidth;
        border: 1px solid $themeColor;
        padding: 30px 13px 18px 18px;
        background-color: #FFF;
        // 取消双击选中
        -moz-user-select:none;/*火狐*/
        -webkit-user-select:none;/*webkit浏览器*/
        -ms-user-select:none;/*IE10*/
        -khtml-user-select:none;/*早期浏览器*/
        user-select:none;
        &:before,&:after{
            content:"";
            display:block;
            border-left: 8px solid transparent;
            border-bottom: 18px solid $themeColor;
            border-right: 8px solid transparent;
            position:absolute; 
            top:-18px;
            left:22px;
            font-size:0;
            line-height:0;
        }
        &:after{
            top: -16px;
            border-bottom: 18px solid #FFF;
        }
        .close {
            position: absolute;
            right: 18px;
            top: 14px;
            color: $themeColor;
            font-size: $sidebarIconFontSize;
            cursor: pointer;
        }
        .title {
            margin-bottom: 12px;
        }
        .input {
            height: 36px;
            line-height: 36px;
            border: 1px solid $defaultColor;
            box-shadow: 0 0px 2px inset #000;
            padding: 0 16px;
            margin-bottom: 22px;
            color: $themeColor;
            input {
                width: 100%;
                outline: none;
                border:none;
                padding: 0;
            }
        }
        .buttonGroup{
            button {
                height: $primaryButtonHeight;
                line-height: $primaryButtonHeight;
                text-align: center;
                min-width: 120px;
                margin-right: 16px;
                color: #FFF;
                outline: none;
                border: none;
                border-radius: 0;
                cursor: pointer;
            }
            .add {
                background-color: $themeColor;
                &:active {
                    background-color: $primaryButtonActiveColor;

                }
            }
            .cancel {
                background-color: $sidebarActiveColor;
                &:active {
                    background-color: $sidebarColor;
                }
            }
        }

    }

    .shadow {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        z-index: $shadowZIndex;
    }

    .uper {
        top: auto;
        bottom: calc(100% + 18px);
        &::before, &::after {
            top: auto;
            bottom: -18px;
            transform: rotate(180deg);
        }
        &:after{
            bottom: -16px;
        }
    }
</style>