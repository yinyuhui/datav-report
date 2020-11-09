<template>
    <el-card shadow="hover">
        <div class="title">{{ title }}</div>
        <div class="value">{{ value }}</div>
        <div class="content">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </el-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'title'
        },
        value: {
            type: String,
            default: '0'
        }
    }
}
</script>

<style lang="stylus">
.emphasis
    color #333333
    font-weight 700
    margin-left 8px
.increase, .decrease
    width 0
    height 0
    border 3px solid transparent
.increase
    border-bottom-color red
    margin 0 0 4px 5px
.decrease
    border-top-color green
    margin 2px 0 0 5px
</style>

<style lang="stylus" scoped>
.title
    font-size 12px
    color #999999
.value
    font-size 25px
    color #000000
    margin-top 16px
    letter-spacing 1px
.content
    height 50px
    margin-top 5px
.footer
    margin-top 10px
    padding-top 10px
    border-top 1px solid #eeeeee
    font-size 12px
    color #666666
</style>
