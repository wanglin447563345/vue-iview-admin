<template>
  <div class="top_bar">
    <div class="top_bar_cont">
      <Icon @click="screenFull" :type="!isFullscreen ? 'md-qr-scanner' : 'md-contract'"/>
      <span>|</span>
      <Dropdown>
        <a href="javascript:void(0)">
          用户名
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>用户信息</DropdownItem>
          <DropdownItem>退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <span>|</span>
      <div>
          <span>中</span> / <span>EN</span>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import { 
    Dropdown,
    DropdownMenu,
    DropdownItem
     } from "iview";
export default {
    data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  methods: {
      screenFull(){
          if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      },
      change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
};
</script>
<style lang="scss">
.top_bar {
    height: 5vh;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;
    background: #fff;
    .top_bar_cont{
        width: 165px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            cursor: pointer;
        }
        .ivu-icon{
            font-size: 20px;
            cursor: pointer
        }
    }
}
    
</style>