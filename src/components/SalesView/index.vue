<template>
    <div class="sales-view">
        <el-card body-style="padding-bottom: 14px">
            <div slot="header" class="sales-view-card-header">
                <el-menu
                    :default-active="activeIndex"
                    mode="horizontal"
                    @select="handleSelect"
                    class="sales-view-menu"
                >
                    <el-menu-item index="1">销售额</el-menu-item>
                    <el-menu-item index="2">访问量</el-menu-item>
                </el-menu>
                <div class="header-right">
                    <el-radio-group v-model="activeRadio" size="small">
                        <el-radio-button label="今日" />
                        <el-radio-button label="本周" />
                        <el-radio-button label="本月" />
                        <el-radio-button label="今年" />
                    </el-radio-group>
                    <el-date-picker
                        class="date-picker"
                        type="daterange"
                        size="small"
                        v-model="date"
                        :pickerOptions="pickerOptions"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        unlink-panels
                    />
                </div>
            </div>
            <div class="sales-body">
                <div class="chart">
                    <v-chart :options="getOption()" />
                </div>
                <div class="rank">
                    <div class="rank-title">排行榜</div>
                    <div
                        class="rank-item"
                        v-for="item of rankList"
                        :key="item.no"
                        :class="{ 'top-item': item.no <= 3 }"
                    >
                        <div class="no">{{ item.no }}</div>
                        <div class="label">{{ item.label }}</div>
                        <div class="number">{{ item.number }}</div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        const rankList = []
        for (let i = 1; i < 8; i++) {
            rankList.push({
                no: i,
                label: '肯德基',
                number: 234
            })
        }
        return {
            activeIndex: '1',
            activeRadio: '今日',
            date: null,
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            let start = new Date()
                            start = start.setTime(start - 7 * 24 * 3600 * 1000)
                            picker.$emit('pick', [start, new Date()])
                        }
                    },
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            let start = new Date()
                            start = start.setTime(start - 30 * 24 * 3600 * 1000)
                            picker.$emit('pick', [start, new Date()])
                        }
                    },
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            let start = new Date()
                            start = start.setTime(start - 90 * 24 * 3600 * 1000)
                            picker.$emit('pick', [start, new Date()])
                        }
                    }
                ]
            },
            rankList
        }
    },

    methods: {
        handleSelect(index) {
            console.log(index)
            this.activeIndex = index
        },

        getOption() {
            return {
                color: ['#3398DB'],
                title: {
                    text: '年度销售业绩数据',
                    textStyle: {
                        fontSize: 12,
                        color: '#666666'
                    },
                    left: 6
                },
                grid: {
                    top: 50,
                    left: 42,
                    right: 60,
                    bottom: 54
                },
                xAxis: {
                    data: [
                        '1月',
                        '2月',
                        '3月',
                        '4月',
                        '5月',
                        '6月',
                        '7月',
                        '8月',
                        '9月',
                        '10月',
                        '11月',
                        '12月'
                    ],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#666'
                        }
                    },
                    axisLabel: {
                        color: '#333'
                    }
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dotted'
                        }
                    }
                },
                series: [
                    {
                        type: 'bar',
                        data: [439, 352, 35, 223, 345, 453, 439, 352, 35, 223, 345, 453],
                        barWidth: '35%'
                    }
                ]
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.sales-view
    margin-top 20px
    .sales-view-card-header

        position relative
    .sales-view-menu
        padding 0 20px
    .el-menu-item
        height 50px
        line-height 50px
        margin 0 20px
    .header-right
        position absolute
        right 0
        top 0
        display flex
        justify-content space-between
        align-items center
        height 50px
    .date-picker
        margin 0 20px
    .sales-body
        display flex
        .chart
            flex 0 0 70%
        .rank
            flex 1
            font-size 12px
            .rank-title
                color #666666
                font-weight 500
                margin-bottom 20px
            .rank-item
                display flex
                align-items center
                padding 6px 0
                color #333333
                .no
                    width 20px
                    height 20px
                    display flex
                    justify-content center
                    align-items center
                    margin-right 10px
                .number
                    flex 1
                    text-align right
            .top-item .no
                background #000
                border-radius 50%
                color #fff
                font-weight 500
</style>
