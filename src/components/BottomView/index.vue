<template>
    <div class="bottom-view">
        <el-card class="search-card" shadow="hover" body-style="padding: 40px">
            <template #header>
                <div class="header">
                    <p>关键词搜索</p>
                </div>
            </template>
            <div class="charts-container">
                <div class="chart">
                    <div class="chart-title">搜索用户数</div>
                    <div class="chart-count">98,223</div>
                    <v-chart :options="searchUsersOption" autoresize />
                </div>
                <div class="chart">
                    <div class="chart-title">搜索量</div>
                    <div class="chart-count">197,737</div>
                    <v-chart :options="searchUsersOption" autoresize />
                </div>
            </div>
            <el-table class="table" :data="tableData">
                <el-table-column
                    v-for="column of columns"
                    :key="column.prop"
                    v-bind="column"
                    align="center"
                />
            </el-table>
            <el-pagination class="pagination" :total="200" background layout="prev,pager,next" />
        </el-card>
        <el-card class="sales-card" shadow="hover">
            <template #header>
                <div class="header">
                    <p>分类销售排行</p>
                    <el-radio-group v-model="activeRadio" size="small">
                        <el-radio-button label="品类" />
                        <el-radio-button label="商品" />
                    </el-radio-group>
                </div>
            </template>
            <div class="chart">
                <v-chart :options="pieOption" autoresize />
            </div>
        </el-card>
    </div>
</template>

<script>
const searchUsersOption = {
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
            data: [43, 10, 23, 24, 45, 23, 34],
            areaStyle: {
                color: 'rgba(95,187,255,0.5)'
            },
            lineStyle: {
                color: 'rgba(95,187,255,1)'
            },
            symbolSize: 0,
            smooth: true
        }
    ]
}
const searchCountOption = {}

const tableData = Array(4).fill({
    rank: 1,
    keyword: '拉萨',
    searchCount: 9435,
    searchUsers: 343,
    clickRate: 29
})
const columns = [
    {
        prop: 'rank',
        label: '排名',
        width: 100
    },
    {
        prop: 'keyword',
        label: '关键词'
    },
    {
        prop: 'searchCount',
        label: '总搜索量',
        width: 100
    },
    {
        prop: 'searchUsers',
        label: '搜索用户数',
        width: 100
    },
    {
        prop: 'clickRate',
        label: '点击率',
        width: 100
    }
]

const pieOption = {
    color: ['rgb(120,242,131)', 'rgb(231,231,3)', 'rgb(75,193,252)'],
    title: [
        {
            text: '品类分布',
            textStyle: {
                fontSize: 14,
                color: '#666'
            },
            top: 16,
            left: 28
        },
        {
            text: '累计订单量',
            subtext: 638,
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
                fontSize: 14,
                color: '#999'
            },
            subtextStyle: {
                fontSize: 28,
                color: '#333'
            }
        }
    ],
    legend: {
        type: 'scroll',
        height: 250,
        orient: 'vertical',
        top: 'middle',
        left: '70%',
        textStyle: {
            color: '#8c8c8c'
        }
    },
    tooltip: {
        confine: true,
        formatter({ marker, name, value, percent }) {
            return `${marker} ${name} </br>数量：${value}</br>占比：${percent}%`
        }
    },
    series: {
        type: 'pie',

        center: ['35%', '50%'],
        radius: ['40%', '55%'],
        labelLine: {
            normal: {
                length: 5,
                length2: 3,
                smooth: true
            }
        },
        itemStyle: {
            borderWidth: 4,
            borderColor: '#fff'
        },
        hoverOffset: 3,
        stillShowZeroSum: false,
        label: {
            show: true,
            position: 'outside'
        },

        data: [
            {
                name: '地方菜系1',
                value: 23
            },
            {
                name: '地方菜系2',
                value: 27
            },
            {
                name: '地方菜系3',
                value: 43
            },
            {
                name: '简餐便当1',
                value: 53
            },
            {
                name: '简餐便当2',
                value: 34
            },
            {
                name: '汉堡披萨',
                value: 64
            }
        ]
    }
}
export default {
    data() {
        return {
            searchUsersOption,
            searchCountOption,
            tableData,
            columns,
            activeRadio: '品类',
            pieOption
        }
    }
}
</script>

<style lang="stylus" scoped>
.bottom-view
    display flex
    margin-top 20px
    .search-card, .sales-card
        flex 1
        .header
            display flex
            justify-content space-between
            align-items center
            height 60px
            padding 0 20px
            border-bottom 1px solid #eeeeee
            font-size 14px
            color #333333
            font-weight 500

    .search-card
        margin-right 10px
        .charts-container
            height 105px
            display flex
            .chart-title
                font-size 14px
                color #999999
            .chart-count
                font-size 22px
                color #333333
                letter-spacing 2px
                margin 10px 0 2px 0
            .chart
                height 50px
                flex 1
            .chart:first-child
                padding-right 10px
            .chart:last-child
                padding-left 10px
        .table
            margin-top 20px
        .pagination
            display flex
            justify-content flex-end
            margin-top 20px
    .sales-card
        margin-left 10px
        .chart
            height 452px
</style>
