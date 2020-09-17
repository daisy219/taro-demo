import Vue from 'vue'
import Vant from 'vant';
import { Lazyload } from 'vant';

// 样式
import 'vant/lib/index.css';
import './app.less'
import './assets/common.less';
const App = new Vue({
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})
Vue.use(Vant);
Vue.use(Lazyload);

export default App
