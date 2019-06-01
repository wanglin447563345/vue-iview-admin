<template>
  <div class="admin_layout">
    <div class="left_menu">
      <left-menu></left-menu>
    </div>
    <div class="right_cont">
      <top-bar></top-bar>
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {
    LeftMenu,
    TopBar,
} from '../components'
import {
    Breadcrumb,
    BreadcrumbItem
} from 'iview'
export default {
    components: {
        LeftMenu,
        TopBar,
        Breadcrumb,
        BreadcrumbItem
    }
};
</script>

<style lang="scss">
.admin_layout{
    display: flex;
    height: 100vh;
    .left_menu{
        background: #515a6e
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
}
</style>