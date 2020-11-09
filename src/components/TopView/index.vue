<template>
    <div class="top-view">
        <el-row :gutter="20">
            <el-col :span="6">
                <total-sales />
            </el-col>
            <el-col :span="6">
                <total-orders />
            </el-col>
            <el-col :span="6">
                <today-users />
            </el-col>
            <el-col :span="6">
                <total-users />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import TotalSales from './comps/TotalSales'
import TotalOrders from './comps/TotalOrders'
import TodayUsers from './comps/TodayUsers'
import TotalUsers from './comps/TotalUsers'
export default {
    components: {
        TotalSales,
        TotalOrders,
        TodayUsers,
        TotalUsers
    }
}
</script>

<style></style>
