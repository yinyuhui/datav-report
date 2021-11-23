<template>
    <div class="map">
        <div class="list">
            <el-radio-group v-model="active" size="small">
                <el-radio-button
                    v-for="{ label, comp } of list"
                    :label="comp"
                    :key="comp"
                    @click="active = comp"
                >{{label}}</el-radio-button>
            </el-radio-group>
        </div>

        <div class="container">
            <component :is="active"></component>
        </div>
    </div>
</template>

<script>
import mapComps from './mapComp'
const list = [
    { label: '散点图', comp: 'scatter' },
    { label: '飞线', comp: 'line' }
]
export default {
    name: 'Map',
    components: {
        ...mapComps
    },

    data () {
        return {
            list,
            active: 'scatter'
        }
    }
}
</script>

<style lang="stylus" scoped>
.list
    padding 10px 20px
    background #fff
.container
    width 100%
    height calc(100vh - 52px)
</style>
