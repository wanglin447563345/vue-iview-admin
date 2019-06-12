<template>
  <div class="admin_layout " :class="[`admin_layout_${navTheme}`]">
    <div class="left_menu">
      <left-menu :theme='navTheme'></left-menu>
    </div>
    <div class="right_cont">
      <Header></Header>
      <div class="brand_nav">
        <Breadcrumb>
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="content">
          <router-view></router-view>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
    <drawer-setting></drawer-setting>
  </div>
</template>

<script>
import Header from './Header'
import LeftMenu from './LeftMenu'
import DrawerSetting from './DrawerSetting'
import Footer from './Footer'
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
        DrawerSetting,
        Footer
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
            min-height: calc(98vh - 120px);
            background: #ffffff;
            margin: 0 2vh 1vh;
            overflow-y: auto;
            padding: 20px 15px;
            box-sizing: border-box
        }
        .ivu-breadcrumb{
            height: 30px;
            line-height: 30px;
             padding: 0 20px
        }
    }
  .footer{
    height: 40px;
    line-height: 40px;
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
