<template>
    <div class="user_layout">
      <div class="language">
        <span @click="langToggle('zh_CN')">中</span> / <span @click="langToggle('en_US')">EN</span>
      </div>
        <h1>vue-iview-admin</h1>
        <router-view></router-view>
        <div class="login_layout_footer">
          <Footer></Footer>
        </div>
    </div>
</template>

<script type="text/javascript">
import Footer from './Footer'
  export default {
    components: {
      Footer
    },
    methods: {
      langToggle(type){
        localStorage.setItem('language',type)
        if(type === 'zh_CN') {
          this.$i18n.locale = 'zh_CN';
        }
        if(type === 'en_US'){
          this.$i18n.locale = 'en_US';
        }
      }
    }
  }
</script>

<style lang="less">
    .user_layout{
        min-height: 100vh;
        background: #f7f7f7;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      .language{
        align-self: flex-end;
        padding: 10px 50px;
        span{
          cursor: pointer;
          font-size: 14px;
        }
      }
      h1{
        color: #2d8cf0;
        font-size: 50px;
        text-align: center;
        margin: 10vh 0 6vh;
      }
      .login_layout_footer{
        position: absolute;
        bottom: 30px;
      }
    }
</style>
