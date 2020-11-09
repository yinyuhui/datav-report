<template>
    <common-card title="今日交易用户数" value="9,165">
        <div id="today-users-chart" :style="{ width: '100%', height: '100%' }"></div>
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
    mounted() {
        const dom = document.getElementById('today-users-chart')
        const chart = this.$echarts.init(dom)
        const xData = []
        const data = []
        for (let i = 0; i < 14; i++) {
            xData.push(`${i}:00`.padStart(5, '0'))
            data.push(Math.floor(Math.random() * 300))
        }
        chart.setOption({
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
                boundaryGap: false
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
        })
    }
}
</script>

<style></style>
