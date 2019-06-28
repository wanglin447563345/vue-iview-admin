<template>
    <div class="bmap">
        <Bmap class="map" style='height: 500px'></Bmap>
        <BmapMark v-model="point" class="mark" style='height: 500px'></BmapMark>
        <p>经度：{{point.lng}}<br>维度：{{point.lat}}</p>
    </div>
    
</template>
<script>
import {Bmap, BmapMark} from '../../components'
export default {
    data () {
        return {
            point: {

            }
        }
    },
    components: {
        Bmap,
        BmapMark
    },
    mounted() {

    }
}
</script>
<style lang="less">
    .bmap{
        display: flex;
        width: 100%;
        .map{
            flex: 1;
            height: 500px;
            margin-right: 10px;
        }
        .mark{
            flex: 1;
            height: 500px;
            margin-left: 10px
        }
    }
</style>