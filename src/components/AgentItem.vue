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
                <span class="icon icon-plus plus"></span>
                <div class="tag" v-for="(el, index) of data.resources" :key="index">
                    <span>{{el}}</span>
                    <span class="icon icon-trash"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AgentItem',
        props: ['opts'],
        data() {
            return {
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
            display:inline-block;
            .top {
                display: flex;
                justify-content: space-between;
                align-content: center;
                margin-bottom: 30px;
                label {
                    &::before {
                        font-size: $iconFontSize;
                        position: relative;
                        top: 1px;
                        opacity: 0.7;
                    }
                    span {
                        margin-left: 12px;
                    }
                }
                .name {
                    color: $hoverColor;
                }
                .idle {
                    display: inline-block;
                    color: $badgesColor;
                    font-size: $badgesFontSize;
                    height: $badgesFontSize;
                    line-height: $badgesFontSize;
                    padding: 2px 7px;
                    background-color: $idleColor;
                }
                .building {
                    display: inline-block;
                    color: $badgesColor;
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
                .plus {
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    color: #FFF;
                    background-color: $primaryButtonColor;
                    cursor: pointer;
                }
                .tag {
                    padding: 2px 7px;
                    margin-left: 10px;
                    background-color: $listItemBgColor;
                    cursor: pointer;
                    .icon {
                        margin-left: 8px;
                        &::before {
                            font-size: $iconFontSize;
                            position: relative;
                            top: 1px;
                        } 
                    }
                }
            }
        }
    }

</style>