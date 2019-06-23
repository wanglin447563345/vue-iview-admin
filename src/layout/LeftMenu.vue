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
  <template v-if="menuData.length>0" v-for="submenu in menuData" :keys='submenu.name'>
    <Submenu :name="submenu.name">
      <template slot="title">
        <Icon type="ios-analytics"/>{{submenu.meta.title}}
      </template>
      <template v-for="menuitem in submenu.children" :keys='menuitem.name'>
        <MenuItem :name="menuitem.name" :to="menuitem.path">{{menuitem.meta.title}}</MenuItem>
      </template>
    </Submenu>
  </template>
  <template v-else>
    暂无数据
  </template>
  </Menu>
</template>

<script>
import { Menu, Submenu, MenuItem } from "iview";
import {check} from '../tools/auth'
export default {
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes)
    return {
      openNames: [],
      activeName: this.$route.name,
      menuData
    };
  },
  methods: {
    handleSelect(v) {
      this.activeName = v;
    },
    handleOpen(v) {
      this.openNames = v;
    },
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];
      for (let item of routes) {
        // if (item.meta && item.meta.authority && !check(item.meta.authority)) {
        //   continue;
        // }
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children) {
            newItem.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu && item.children
        ) {
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          );
        }
      }
      return menuData;
      
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
