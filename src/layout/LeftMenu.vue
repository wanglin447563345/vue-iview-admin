<template>
  <Menu active-name="dashboard" :theme="theme">
    <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                主页
            </template>
            <MenuItem name="1-1" to='/home/analysis'>分析页</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
                表格
            </template>
            <MenuItem name="2-1"  to='/table/basic_table'>基础表格</MenuItem>
            <MenuItem name="2-2" to="/table/drag_table">可拖动表格</MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-cog" />
                表单
            </template>
            <MenuItem name="4-1" to='/form/basic_form'>基础表单</MenuItem>
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
    return {}
  },
  methods: {},
  components: {
    Menu,
    Submenu,
    MenuItem
  }
};
</script>