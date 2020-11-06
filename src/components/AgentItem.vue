<template>
    <div class="agentItem">
        <div class="logo"><img :src="logo" alt="itemLogo"></div>
        <div class="content">
            <div class="top">
                <label class="icon icon-desktop">
                    <span class="name">{{data.name}}</span>
                </label>
                <span :class="data.status">{{data.status}}</span>
                <label class="icon icon-info">
                    <span class="info">{{data.ip}}</span>
                </label>
                <label class="icon icon-folder">
                    <span class="info">{{data.location}}</span>
                </label>
            </div>
            <div class="bottom">
                <div class="left">
                    <span class="icon icon-plus plus" @click="() => {popUp = !popUp}"></span>
                    <div class="tags">
                        <div class="tag" v-for="(el, index) of data.resources" :key="index">
                            <span>{{el}}</span>
                            <span class="icon icon-trash" @click.stop="trash(el)"></span>
                        </div>
                    </div>
                    <popUpDialog :opts="data.resources" v-if="popUp" @close="close" @add="changeAgents"></popUpDialog>
                </div>
                <button class="deny" v-if="data.status === 'building'"><span class="icon icon-deny"></span>
                    Deny</button>
            </div>
        </div>
    </div>
</template>

<script>
    import popUpDialog from '@/components/PopUpDialog.vue'
    import {
        changeAgents
    } from '@/api/agent'

    export default {
        name: 'AgentItem',
        props: ['opts'],
        components: {
            popUpDialog
        },
        data() {
            return {
                popUp: false,
                data: this.opts
            }
        },
        watch: {
            opts: (nVal) => {
                this.data = nVal
            }
        },
        computed: {
            logo() {
                return require(`@/assets/os_icons/${this.data.os}.png`)
            }
        },
        methods: {
            close() {
                this.popUp = false
            },
            changeAgents(resources) {
                this.data = {
                    ...this.data,
                    ...{
                        resources
                    }
                } // 深拷贝让vue触发数据更新
                changeAgents(this.data)
            },
            trash(trashString) {
                const arry = this.data.resources
                arry.splice(arry.findIndex(el => el === trashString), 1) // 删除相同的项
                this.changeAgents(arry)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .agentItem {
        padding: 20px;
        margin-top: 18px;
        background-color: #FFF;
        display: flex;

        .logo {
            display: inline-block;
            width: 80px;
            height: 80px;
            margin-right: 40px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .content {
            flex: 1;
            display: inline-block;

            .top {
                display: flex;
                justify-content: space-between;
                align-content: center;
                margin-bottom: 30px;
                padding-right: 30px;

                label {
                    &::before {
                        font-size: $iconFontSize;
                        position: relative;
                        top: 1px;
                        opacity: 0.7;
                    }

                    span {
                        margin-left: 7px;
                    }
                }

                .name {
                    color: $themeColor;
                }

                .idle {
                    display: inline-block;
                    color: #FFF;
                    font-size: $badgesFontSize;
                    height: $badgesFontSize;
                    line-height: $badgesFontSize;
                    padding: 2px 7px;
                    background-color: $idleColor;
                }

                .building {
                    display: inline-block;
                    color: #FFF;
                    font-size: $badgesFontSize;
                    height: $badgesFontSize;
                    line-height: $badgesFontSize;
                    padding: 2px 7px;
                    background-color: $buildColor;
                }
            }

            .bottom {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .left {
                    position: relative;
                    display: flex;
                    align-items: center;

                    .plus {
                        display: inline-block;
                        min-width: 25px;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        color: #FFF;
                        background-color: $primaryButtonColor;
                        font-size: $primaryIconFontSize;
                        cursor: pointer;

                        &:active {
                            background-color: $primaryButtonActiveColor;
                        }
                    }

                    .tags {
                        line-height: 25px;

                        .tag {
                            display: inline-block;
                            padding: 0 7px;
                            margin-left: 10px;
                            background-color: $listItemBgColor;
                            height: 20px;
                            line-height: 20px;
                            .icon {
                                margin-left: 8px;
                                cursor: pointer;

                                &::before {
                                    font-size: $iconFontSize;
                                    position: relative;
                                    top: 1px;
                                }
                            }
                        }
                    }
                }

                .deny {
                    min-width: 90px;
                    height: $primaryButtonHeight;
                    line-height: $primaryButtonHeight;
                    text-align: center;
                    color: #FFF;
                    outline: none;
                    border: none;
                    border-radius: 0;
                    background-color: $themeColor;

                    &:active {
                        background-color: $primaryButtonActiveColor;

                    }

                    cursor: pointer;
                }
            }
        }
    }
</style>