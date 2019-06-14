<template>
    <div>
        <div id="container"></div> 
    </div>
</template>
<script>
export default {
    mounted() {
        const map = new AMap.Map('container', {
        zoom:11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D'//使用3D视图
    });
    }
}
</script>
<style lang="less">
    #container{
        height: 500px;
    }
</style>