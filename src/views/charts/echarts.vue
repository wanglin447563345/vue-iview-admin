<template>
    <div>
            <echarts style="height: 400px" :options="eOptions"></echarts>        
    </div>
</template>
<script>
import {Echarts} from '../../components'
export default {
    data() {
        return {
            eOptions: {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}
        }
    },
    components: {
        Echarts
    }
}
</script>