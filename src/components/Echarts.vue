<template>
  <div ref="echartDom"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import {debounce} from '../tools/tool'

export default {
  data() {
    return {};
  },
  props: {
      options: {
          type: Object,
          default: () => {}  // 类型为对象或数组是，要用函数返回
      }
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.echarts = echarts.init(this.$refs.echartDom);
      addListener(this.$refs.echartDom, this.changeResize)
      // 绘制图表
      this.echarts.setOption(this.options);
    },
    changeResize () {
      console.log(111)
        this.echarts.resize()
    }
  },
  created() {
    this.changeResize = debounce(this.changeResize,500)
  },

  mounted() {
    this.initChart()
  },
  beforeDestroy () {
      removeListener(this.$refs.echartDom, this.changeResize)
      this.echarts.dispose()
      this.echarts = null
  }
};
</script>