<template>
    <div class="home">
        {{$t('home.HOME')}}
        <echarts></echarts>
    </div>
</template>

<style lang="less">
    .home{
        display: grid;
        height: 100%;

    }
</style>

<script>
import {Echarts} from '../../components'
export default {
    data () {
        return {}
    },
    components: {
        Echarts
    },
    methods: {
        
    }
}
</script>
