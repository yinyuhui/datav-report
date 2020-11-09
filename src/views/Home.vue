<template>
    <div class="dashboard">
        <top-view />
        <sales-view />
        <bottom-view />
        <map-view />
    </div>
</template>

<script>
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'
export default {
    name: 'Home',
    components: { TopView, SalesView, BottomView, MapView }
}
</script>

<style lang="stylus" scoped>
.dashboard {
    padding 20px

}
</style>
