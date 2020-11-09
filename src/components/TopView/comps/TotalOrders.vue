<template>
    <common-card title="累计订单量" value="2,019,229">
        <v-chart :options="getOptions()" />
        <template #footer>
            <span>昨日订单量</span>
            <span class="emphasis">2,000,000</span>
        </template>
    </common-card>
</template>

<script>
import CommonCardMixin from '@/utils/mixin/CommonCardMixin'
export default {
    mixins: [CommonCardMixin],

    methods: {
        getOptions() {
            return {
                grid: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                xAxis: {
                    type: 'category',
                    show: false,
                    boundaryGap: false
                },
                yAxis: {
                    show: false
                },
                series: [
                    {
                        type: 'line',
                        data: [100, 24, 45, 24, 48, 45, 83, 56],
                        areaStyle: {
                            color: 'purple'
                        },
                        lineStyle: {
                            width: 0
                        },
                        symbolSize: 0,
                        smooth: true
                    }
                ]
            }
        }
    }
}
</script>
