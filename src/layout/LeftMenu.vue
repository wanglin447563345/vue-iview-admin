<template>
  <Menu
    active-name="dashboard"
    :theme="theme"
    :open-names="openNames"
    :active-name="activeName"
    :accordion="true"
    @on-select="handleSelect"
    @on-open-change="handleOpen"
  >
    <Submenu name="home">
            <template slot="title">
                <Icon type="ios-analytics" />
                主页
            </template>
            <MenuItem name="analysis" to='/home/analysis'>分析页</MenuItem>
        </Submenu>
        <Submenu name="table">
            <template slot="title">
                <Icon type="ios-filing" />
                表格
            </template>
            <MenuItem name="basic_table"  to='/table/basic_table'>基础表格</MenuItem>
            <MenuItem name="drag_table" to="/table/drag_table">可拖动表格</MenuItem>
        </Submenu>
        <Submenu name="form">
            <template slot="title">
                <Icon type="ios-cog" />
                表单
            </template>
            <MenuItem name="basic_form" to='/form/basic_form'>基础表单</MenuItem>
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
      openNames: ['home'],
      activeName: this.$route.name
    }
  },
  methods: {
    handleSelect (v) {
      this.activeName = v
    },
    handleOpen (v) {
      this.openNames = v
    }
  },
  components: {
    Menu,
    Submenu,
    MenuItem
  },
  mounted () {

  }
};
</script>
