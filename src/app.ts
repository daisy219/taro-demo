import Vue from 'vue'
import VueI18n from 'vue-i18n';

// 样式
// import './app.scss'
import 'taro-ui-vue/src/style/index.scss'
// import 'taro-ui-vue/dist/style/index.scss';
import './assets/common.less';


Vue.use(VueI18n);

// 多语言配置
const i18n = new VueI18n({
  locale: 'cn', // 定义默认语言为中文 
  messages: {
    'cn': require('./assets/languages/zh.json'),
    'en': require('./assets/languages/en.json')
  }
});

const App = new Vue({
  // onShow (options) {
  // },
  i18n,
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
