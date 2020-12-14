<template>
    <div class="map">
        <p>map</p>
        <v-chart :options="option" autoresize />
    </div>
</template>

<script>
// import bmap from 'echarts/extension/bmap'
import 'echarts/extension/bmap/bmap'
import airData from '../mocData/air'
const series = {
    // 使用百度地图坐标系
    coordinateSystem: 'bmap',
    // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
    // data: [[120, 30, 1]]
    // 这样也可以，跟 echarts 的 data 写法一样
    // data: airData,

    encode: {
        value: 2
    },
    itemStyle: {
        color: 'purple'
    },
    symbolSize: v => v[2] / 10,
    emphasis: {
        label: {
            show: true,
            formatter({ data: { name, value } }) {
                return `${name}-${value[2]}`
            },
            position: 'right',
            color: '#333',
            backgroundColor: '#fff',
            padding: 6,
            borderRadius: 4
        }
    }
}
const option = {
    // 加载 bmap 组件
    bmap: {
        // 百度地图中心经纬度
        center: [104.114129, 37.550339],
        // 百度地图缩放
        zoom: 5,
        // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        roam: true,
        // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
        mapStyle: {}
    },
    tooltip: {},
    series: [
        {
            ...series,
            type: 'scatter',
            name: '空气质量',
            data: airData
        },
        {
            ...series,
            type: 'effectScatter',
            name: '空气质量前10',
            data: airData.sort((a, b) => b.value[2] - a.value[2]).slice(0, 10),
            rippleEffect: {
                brushType: 'stroke',
                color: 'red'
                // period: 2,
                // scale: 5,
            },
            itemStyle: {
                color: 'purple',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        }
    ]
}
export default {
    name: 'Map',
    data() {
        return {
            option
        }
    }
}
</script>

<style lang="stylus" scoped>
.map
    width 100vw
    height 100vh
    >>> .anchorBL
        display none
</style>
