<template>
    <div :id="mid"></div> 
</template>
<script>
export default {
    props: {
        mid: {
            type: String,
            default: 'bmap'
        },
        pointData: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    mounted() {
      this.initMap(this.pointData)
    },
    methods: {
        initMap (data) {
            const map = new BMap.Map(this.mid);          // 创建地图实例  
            const point = new BMap.Point(116.331398,39.897445);  // 创建点坐标  
            map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别      
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 

            map.addControl(new BMap.NavigationControl());    
            map.addControl(new BMap.ScaleControl());    
            map.addControl(new BMap.OverviewMapControl());    
            map.addControl(new BMap.MapTypeControl());

            let pointerArr = []
            for (let i of data) {
                const point = new BMap.Point(i.lng, i.lat)
                map.centerAndZoom(point, 11)
                const marker = new BMap.Marker(point)  // 创建标注
                marker.addEventListener('click', (e) => { //  给标注绑定点击事件
                    console.log(e)
                })
                map.addOverlay(marker) //添加标注
                let label = new BMap.label(i.name, {offset: new BMap.Size(20, -10)})  //设置标注的名称
                marker.serLabel(label)  // 标注添加名称文字
                pointerArr.push(point)
            }
            map.setViewport(pointerArr) // 让所有点显示在地图可见范围内
        }
    }
}
</script>