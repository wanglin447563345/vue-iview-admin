<template>
    <div :id="mid"></div> 
</template>
<script>
export default {
    props: {
        mid: {
            type: String,
            default: 'bmap_mark'
        },
        pointData: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    mounted() {
      this.initMap()
    },
    methods: {
        initMap () {
            const map = new BMap.Map(this.mid);          // 创建地图实例  
            const point = new BMap.Point(116.331398,39.897445);  // 创建点坐标  
            map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别      
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 

            map.addControl(new BMap.NavigationControl());    
            map.addControl(new BMap.ScaleControl());    
            map.addControl(new BMap.OverviewMapControl());    
            map.addControl(new BMap.MapTypeControl());

            map.addEventListener('click', (e) => {
                map.clearOverlays()
                this.$emit('input', e.point)
                const marker = new BMap.Marker(e.point)
                map.addOverlay(marker) //添加标注
            })
        }
    }
}
</script>