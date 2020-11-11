<template>
    <common-card title="今日交易用户数" value="9,165">
        <v-chart :options="getOptions()" autoresize />
        <template #footer>
            <span>退货率</span>
            <span class="emphasis">5.64%</span>
        </template>
    </common-card>
</template>

<script>
import CommonCardMixin from '@/utils/mixin/CommonCardMixin'
export default {
    mixins: [CommonCardMixin],

    methods: {
        getOptions() {
            const xData = []
            const data = []
            for (let i = 0; i < 14; i++) {
                xData.push(`${i}:00`.padStart(5, '0'))
                data.push(Math.floor(Math.random() * 300))
            }
            return {
                tooltip: {},
                color: ['#3398db'],
                grid: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                xAxis: {
                    show: false,
                    type: 'category',
                    data: xData,
                    boundaryGap: 10
                },
                yAxis: {
                    show: false
                },
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        data,
                        barWidth: '60%',
                        itemStyle: {
                            barBorderRadius: 2
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style></style>
