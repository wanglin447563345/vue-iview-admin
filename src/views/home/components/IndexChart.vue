<template>
    <div class="index_chart">
        <div class="title">
            {{title}}
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>
<style lang="less">
    .title{
        height: 30px;
        font-size: 16px;
        color: #fff;
        background: lightskyblue;
        padding: 0 20px;
    }
</style>