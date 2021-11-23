<template>
    <footer>
        <ul class="flex">
            <li
                v-for="{ label, link, disabled } of list"
                :key="label"
                :class="{ disabled }"
                @click="!disabled && $router.push(link)"
            >
                {{ label }}
            </li>
        </ul>
    </footer>
</template>

<script>
const list = [
    { label: '常见选型', link: '/basic-demo' },
    { label: 'map', link: '/map' },
    { label: 'chart', link: '/chart', disabled: true }
]

export default {
    data () {
        return {
            list
        }
    }
}
</script>

<style lang="stylus" scoped>
footer {
    padding 30px 60px
    margin-top 20px
    background #555
    li {
        cursor pointer
        color #fff
        font-size 16px
        &.disabled {
            cursor not-allowed
        }
    }
    li + li {
        margin-left 20px
    }
}
</style>
