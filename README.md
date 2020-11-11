## 实战记录

主要是记录一些平时开发时忽视的内容，或是不太熟悉留作笔记用于巩固和查阅

### 1 项目初始化

`vue -V` 查看 `vue-cli` 版本，`npm install -g @vue/cli` 全局安装或更新 `vue-cli`

`vue create xxx` 初始化一个 vue 项目

`vue add element` 可以直接引入 elementUI，按需引入相关的配置项也会生成好

分列的布局除了用 flex 还可以用 UI 框架提供的布局，如 `el-row`，`el-col`，一行共 24 份，如果各列总和超过 24 会自动换行

###

### 2 ECharts 相关

ECharts 绘制图表流程

```js
const dom = document.getElementById(id) // id 换成对应的容器 id

const chart = this.$echarts.init(dom) // echarts 全局挂载之后可以这么写

chart.setOption(option) // 在 option 中设置坐标系，series 等
```

`boundaryGap` 指定与坐标轴的间隙，默认是 true，可以设为数值、百分比及 false

如果柱状图变成横着的，把 Y 轴设为类目轴（`category`）即可

柱状图 `series` 的 `stack` 值设为相同时，可以将两个柱体叠放（堆叠柱状图）

可以自定义图表渲染函数 `renderItem(params, api)` ，`params` 主要是当前 item 的一些属性，`api` 有一些常用的方法，如 `api.value(0)` ， `api.coord([value, 0])` ，`api.size()` ， `api.style()` 等，使用时 [**查阅文档**](https://echarts.apache.org/zh/option.html#series-custom.type) 即可

`vue-echarts` 和 `v-charts` 都是基于 vue 和 ECharts 封装的。但是 `v-charts` 把数据结构也封装了，提供了一些新的属性（需要二次学习），渲染一个图表需要的配置项非常简洁，也提供了一些新的图表，如水滴图、词云图

`axisTick` 有个配置项 `alignWithLabel` ，设为 `true` 之后，柱状图柱体、label、标记就能对齐了
