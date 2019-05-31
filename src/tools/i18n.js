import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const languages = {
  'zh_CN': require('../assets/i18n/zh.js'),
  'en_US': require('../assets/i18n/en.js')
}

export default new VueI18n({
  // 通过localStorage来防止刷新页面回到默认语言问题
  locale: localStorage.getItem('language')&&localStorage.getItem('language') === 'en_US' ? 'en_US': 'zh_CN', // 默认显示中文
  messages: languages
})
