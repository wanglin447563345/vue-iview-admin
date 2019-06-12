<template>
  <div ref="echartDom" style="height: 400px"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";

export default {
  data() {
    return {};
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.echarts = echarts.init(this.$refs.echartDom);
      addListener(this.$refs.echartDom, this.changeResize)
      // 绘制图表
      this.echarts.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    changeResize () {
        this.echarts.resize()
    }
  },

  mounted() {
    this.initChart();
  },
  beforeDestroy () {
      removeListener(this.$refs.echartDom, this.changeResize)
      this.echarts.dispose()
      this.echarts = null
  }
};
</script>