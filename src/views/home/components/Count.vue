<template>
  <countTo class="count" :startVal='startVal' :endVal='endVal' :duration='duration'></countTo>
</template>
 
<script>
  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    props: {
        startVal: {
            type: Number,
            default: 0
        },
         endVal: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default:3000
        }
    }
  }
</script>
<style lang="less">
    .count{
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        flex: 1;
        height: 80px;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
