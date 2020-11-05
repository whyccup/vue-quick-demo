<template>
    <div class="dialog">
        <span class="close icon-close" @click="cancel"></span>
        <div class="title">Separate multiple resource name whith commas</div>
        <input type="text" v-model="data">
        <div class="buttonGroup">
            <button class="add" @click="addResource">Add Resource</button>
            <button class="cancel" @click="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dialog',
        props: ['opts'],
        data() {
            return {
                data: this.opts,
            }
        },
        watch: {
            opts: (nVal) => {
                this.data = nVal
            }
        },
        methods: {
            addResource() {

            },
            cancel() {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dialog {
        position: absolute;
        top: calc(100% + 20px) ;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        width: $popupWidth;
        border: 1px solid $themeColor;
        padding: 30px 13px 18px 18px;
        background-color: #FFF;
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
        input {
            display: block;
            height: 36px;
            line-height: 36px;
            border: 1px solid $defaultColor;
            outline: none;
            box-shadow: 0 0px 2px inset #000;
            padding: 0 16px;
            margin-bottom: 22px;
            color: $themeColor;
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
</style>