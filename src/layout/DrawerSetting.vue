<template>
  <div>
    <Button
      class="open_drawer"
      @click="openDrawer = true"
      type="primary"
      icon="md-settings"
      shape="circle"
    ></Button>
    <Drawer title="设置" :closable="true" v-model="openDrawer">
      <div class="theme_setting">
        <div>
          <h2>整体风格</h2>
        <RadioGroup :value='$route.query.theme||"dark"' @on-change="(v) => changeTheme(v,'theme')">
          <Radio label="light">light</Radio>
          <Radio label="dark">dark</Radio>
        </RadioGroup>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script>
import { Drawer } from "iview";
export default {
  data() {
    return {
      openDrawer: false,
    };
  },
  methods: {
    changeTheme (value, type) {
      this.$router.push({query: {...this.$router.query, [type]: value}})
    }
  },
  components: {
    Drawer
  }
};
</script>

<style lang="less">
.theme_setting{
  margin-bottom: 20px;
  >div{
h2{
    margin-bottom: 10px;
  }
  }
  
}
</style>