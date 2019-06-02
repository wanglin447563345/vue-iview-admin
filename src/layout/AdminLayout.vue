<template>
  <div class="admin_layout " :class="[`admin_layout_${navTheme}`]">
    <div class="left_menu">
      <left-menu :theme='navTheme'></left-menu>
    </div>
    <div class="right_cont">
      <Header></Header>
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
    <drawer-setting></drawer-setting>
  </div>
</template>

<script>
import Header from './Header'
import LeftMenu from './LeftMenu'
import DrawerSetting from './DrawerSetting'
import {
    Breadcrumb,
    BreadcrumbItem,
} from 'iview'
export default {
  computed: {
    navTheme() {
      return this.$route.query.theme || 'dark'
    }
  },
    components: {
        LeftMenu,
        Header,
        Breadcrumb,
        BreadcrumbItem,
        DrawerSetting
    }
};
</script>

<style lang="less">
.admin_layout{
    display: flex;
    height: 100vh;
    .left_menu{
        border-right: 1px solid #dcdee2;
        background: #515a6e;
        .ivu-menu{
          &::after{
            width: 0
          }
        }
    }
    .right_cont{
        flex: 1;
        background: #f5f5f5;
        .content{
            height: 90vh;
            margin: 0 0 1vh;
            background: #ffffff;
            margin: 0 2vh;
            overflow-y: auto;
        }
        .ivu-breadcrumb{
            height: 3vh;
        }
    }
    .open_drawer{
        position: fixed;
        top: 50%;
        right: 0;
        
    }
    
}
.admin_layout_light{
    display: flex;
    height: 100vh;
    .left_menu{
        background: #fff;
    }
}
</style>