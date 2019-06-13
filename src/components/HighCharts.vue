<template>
  <div id='container' ref="container"></div>
</template>

<script>
import Highcharts from "highcharts";
import { addListener, removeListener } from "resize-detector";
export default {
    props: {
        options: {
            type: Object,
            default: () => {}
        }
    },
  methods: {
    initChart() {
      // 初始化图表
      Highcharts.chart("container", this.options);
    
    },
    changeResize () {
        this.Highcharts.resize()
    }
  },
  mounted() {
      this.initChart()
      addListener(this.$refs.container, this.changeResize)
  },
  beforeDestroy () {
      removeListener(this.$refs.container, this.changeResize)
  }
};
</script>