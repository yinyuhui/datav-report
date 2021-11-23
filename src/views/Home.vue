<template>
    <div class="dashboard">
        <top-view />
        <sales-view />
        <bottom-view />
        <map-view />
        <Footer />
    </div>
</template>

<script>
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'
import Footer from '@/components/Footer'
export default {
    name: 'Home',
    components: { TopView, SalesView, BottomView, MapView, Footer },

    mounted () {
        console.log('/#/map 查看地图相关功能')
    }
}
</script>

<style lang="stylus" scoped>
.dashboard {
    padding 20px

}
</style>
