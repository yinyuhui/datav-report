<template>
    <common-card title="累计用户数" value="1,006,035">
        <v-chart :options="getOptions()" />
        <template #footer>
            <div class="total-users-footer">
                <span>日同比</span>
                <span class="emphasis">0.52%</span>
                <div class="increase"></div>
                <span class="month">月同比</span>
                <span class="emphasis">25.66%</span>
                <div class="decrease"></div>
            </div>
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
                tooltip: {},

                grid: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                xAxis: {
                    show: false,
                    boundaryGap: false
                },
                yAxis: {
                    show: false,
                    type: 'category'
                },
                series: [
                    {
                        color: ['#45c946'],
                        type: 'bar',
                        data: [200],
                        barWidth: 10,
                        stack: 'total-users',
                        itemStyle: {
                            barBorderRadius: [5, 0, 0, 5]
                        }
                    },
                    {
                        color: ['#eee'],
                        type: 'bar',
                        data: [350],
                        stack: 'total-users',
                        silent: true,
                        itemStyle: {
                            barBorderRadius: [0, 5, 5, 0]
                        }
                    },
                    {
                        type: 'custom',
                        data: [200],
                        stack: 'total-users',
                        renderItem: (params, api) => {
                            const coord = api.coord([api.value(0), 0])
                            return {
                                type: 'group',
                                children: [
                                    {
                                        type: 'path',
                                        position: coord,

                                        shape: {
                                            d:
                                                'M509.44 153.088a95.36 95.36 0 0 1 134.656 0l412.288 412.416c37.248 37.184 53.696 134.592-64 134.592H161.152c-121.728 0-101.248-97.344-64.064-134.592L509.44 153.088z',
                                            layout: 'cover',
                                            width: 10,
                                            height: 10,
                                            x: -5,
                                            y: 10
                                        },
                                        style: {
                                            fill: '#45c946'
                                        }
                                    },
                                    {
                                        type: 'path',
                                        position: coord,

                                        shape: {
                                            d:
                                                'M646.784 812.16a95.36 95.36 0 0 1-134.656 0L99.904 399.744c-37.248-37.184-53.696-134.592 64-134.592h831.232c121.664 0 101.248 97.344 64 134.592l-412.352 412.416z',
                                            layout: 'cover',
                                            width: 10,
                                            height: 10,
                                            x: -5,
                                            y: -20
                                        },
                                        style: {
                                            fill: '#45c946'
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.total-users-footer
    display flex
    align-items center
    .month
        margin-left 10px
</style>
