<template>
    <common-card title="累计销售额" value="¥ 52,162,456">
        <div class="content">content</div>
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
.emphasis
    color #333333
    font-weight 700
    margin-left 8px
</style>
