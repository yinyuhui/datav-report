## 实战记录

主要是记录一些平时开发时忽视，或是不太熟悉的内容，留作笔记用于巩固和查阅

### 0 项目初始化

`vue -V` 查看 `vue-cli` 版本，`npm install -g @vue/cli` 全局安装或更新 `vue-cli`

`vue create xxx` 初始化一个 vue 项目

`vue add element` 可以直接引入 elementUI，按需引入相关的配置项也会生成好

分列的布局除了用 flex 还可以用 UI 框架提供的布局，如 `el-row`，`el-col`，一行共 24 份，如果各列总和超过 24 会自动换行

### 2 技术选型

+ 常用到的，被封装的很好：`Highcharts` , `Echarts`,  `Antv` 
+ 有更高的需求，浏览器支持的偏原理一些的：`three.js`, `zrender`, `d3`, `canvas`, `Svg`, `WebGL`
+ 硬件相关的，不考虑：`Skia`, `OpenGL`

#### 2.1 canvas

H5 新特性，较常用

```js 
// HTML 定义一个容器
// 实例化得到一个实例
// 
```



### 3 ECharts 相关

#### 3.1 ECharts 绘制图表流程

```js
const dom = document.getElementById(id) // id 换成对应的容器 id

const chart = this.$echarts.init(dom) // echarts 全局挂载之后可以这么写

chart.setOption(option) // 在 option 中设置坐标系，series 等
```

#### 2.2 折线图、柱状图

`boundaryGap` 指定与坐标轴的间隙，默认是 true，可以设为数值、百分比及 false

如果柱状图变成横着的，把 Y 轴设为类目轴（`'category'`）即可

柱状图 `series` 的 `stack` 值设为相同时，可以将两个柱体叠放（堆叠柱状图）

`axisTick` 有个配置项 `alignWithLabel` ，设为 `true` 之后，柱状图柱体、label、标记就能对齐了

#### 2.3 饼图

设置半径时是个数组 [innerRadius, outterRadius]，默认是 [0, '75%']，（是画布的最小边的 75%）

`label` 内容可以用 `formatter` 定制，位置可以用 `position` 设置为 `outside` ，`inside` 或 `inner` ，`center`

`labelLine` 是饼图和外标签之间的连线，可以设置线长宽、是否光滑、样式等

饼图扇形之间距离可以通过 给每个扇形加背景同色边框 实现

#### 2.4 其他

可以自定义图表渲染函数 `renderItem(params, api)` ，`params` 主要是当前 item 的一些属性，`api` 有一些常用的方法，如 `api.value(0)` ， `api.coord([value, 0])` ，`api.size()` ， `api.style()` 等，使用时 [**查阅文档**](https://echarts.apache.org/zh/option.html#series-custom.type) 即可

`vue-echarts` 和 `v-charts` 都是基于 vue 和 ECharts 封装的。但是 `v-charts` 把数据结构也封装了，提供了一些新的属性（需要二次学习），渲染一个图表需要的配置项非常简洁，也提供了一些新的图表，如水滴图、词云图

### 3 百度地图

#### 4.1 叠加 echarts 

引入扩展包后，在 option.bmap 中定义地图配置项，如中心点，缩放等级

将 series.coordinateSystem 设置为 bmap，数据格式同 geo 坐标系

```js
import 'echarts/extension/bmap/bmap'
option.bmap = bmapOption
series.coordinateSystem = 'bmap'
```

#### 3.2 内置动画

内置动画 API，流畅度更高，避免使用定时器或 RAF











