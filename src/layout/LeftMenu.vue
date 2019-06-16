<template>
  <Menu
    active-name="dashboard"
    :theme="theme"
    :open-names="openNames"
    :active-name="activeName"
    :accordion="true"
    @on-select="handleSelect"
    @on-open-change="handleOpen"
    ref="leftNav"
  >
    <Submenu name="home">
      <template slot="title">
        <Icon type="ios-analytics"/>主页
      </template>
      <MenuItem name="analysis" to="/home/analysis">分析页</MenuItem>
    </Submenu>
    <Submenu name="table">
      <template slot="title">
        <Icon type="ios-filing"/>表格
      </template>
      <MenuItem name="basic_table" to="/table/basic_table">基础表格</MenuItem>
      <MenuItem name="drag_table" to="/table/drag_table">可拖动表格</MenuItem>
    </Submenu>
    <Submenu name="form">
      <template slot="title">
        <Icon type="ios-cog"/>表单
      </template>
      <MenuItem name="basic_form" to="/form/basic_form">基础表单</MenuItem>
    </Submenu>
    <Submenu name="chart">
      <template slot="title">
        <Icon type="ios-cog"/>图表
      </template>
      <MenuItem name="echart" to="/chart/echart">echart</MenuItem>
      <MenuItem name="highchart" to="/chart/highchart">highchart</MenuItem>
    </Submenu>
    <Submenu name="map">
      <template slot="title">
        <Icon type="ios-cog"/>地图
      </template>
      <MenuItem name="baidu" to="/map/baidu">百度地图</MenuItem>
      <MenuItem name="google" to="/map/google">谷歌地图</MenuItem>
      <MenuItem name="gaode" to="/map/gaode">高德地图</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
import { Menu, Submenu, MenuItem } from "iview";
export default {
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      openNames: [],
      activeName: this.$route.name
    };
  },
  methods: {
    handleSelect(v) {
      this.activeName = v;
    },
    handleOpen(v) {
      this.openNames = v;
    }
  },
  components: {
    Menu,
    Submenu,
    MenuItem
  },
  mounted() {
    const pathArr = this.$route.path.split("/");
    this.activeName = pathArr[pathArr.length - 1];
    this.openNames.push(pathArr[1]);   // 这里要注意openNames的复制必须写在$$nextTick外面，不然不起作用，但activeName却可以写在里面
    this.$nextTick(() => {
      this.$refs.leftNav.updateOpened();
      this.$refs.leftNav.updateActiveName();
    });
  }
};
</script>
