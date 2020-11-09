<template>
    <common-card title="累计销售额" value="¥ 52,162,456">
        <div class="compare">
            <div class="compare-container">
                <span>日同比</span>
                <span class="emphasis">1.09%</span>
                <div class="increase"></div>
            </div>
            <div class="compare-container">
                <span>月同比</span>
                <span class="emphasis">30.71%</span>
                <div class="decrease"></div>
            </div>
        </div>
        <template #footer>
            <span>昨日销售额</span>
            <span class="emphasis">¥ 30,000,000</span>
        </template>
    </common-card>
</template>

<script>
import CommonCardMixin from '@/utils/mixin/CommonCardMixin'
export default {
    mixins: [CommonCardMixin]
}
</script>

<style lang="stylus" scoped>
.compare
    height 100%
    display flex
    flex-direction column
    justify-content center
    font-size 12px
    color #666666
    .compare-container
        margin-top 3px
        line-height 1.5
        display flex
        align-items center
</style>
