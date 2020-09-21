import { Vue, Component } from 'vue-property-decorator';
import menu1_1 from '../../assets/image/home/menu1-1.png';
import menu1_2 from '../../assets/image/home/menu1-2.png';
import menu1_3 from '../../assets/image/home/menu1-3.png';
import menu1_4 from '../../assets/image/home/menu1-4.png';
import menu1_5 from '../../assets/image/home/menu1-5.png';
import menu1_6 from '../../assets/image/home/menu1-6.png';
import menu2_1 from '../../assets/image/home/menu2-1.png';
import menu2_2 from '../../assets/image/home/menu2-2.png';
import menu2_3 from '../../assets/image/home/menu2-3.png';
import menu2_4 from '../../assets/image/home/menu2-4.png';
import menu2_5 from '../../assets/image/home/menu2-5.png';
import menu2_6 from '../../assets/image/home/menu2-6.png';
@Component
export default class HomePageConst extends Vue {
  get firstModuleArr() {
    return [
      {
        image: menu1_1,
        value: '健康管理',
        path: '',
      },
      {
        image: menu1_2,
        value: '我的福利',
        path: '',
      },
      {
        image: menu1_3,
        value: '服务指南',
        path: '',
      },
      {
        image: menu1_4,
        value: '入离职办理',
        path: '',
      },
      {
        image: menu1_5,
        value: '薪资试算',
        path: '',
      },
      {
        image: menu1_6,
        value: '专属客服',
        path: '',
      },
    ];
  }
  
  get secondModuleArr() {
    return  [
      {
        image: menu2_1,
        value: this.$t('home.baseInfo') ,
        path: '',
      },
      {
        image: menu2_2,
        value: '社保查询',
        path: '',
      },
      {
        image: menu2_3,
        value: '薪资查询',
        path: '',
      },
      {
        image: menu2_4,
        value: '公积金查询',
        path: '',
      },
      {
        image: menu2_5,
        value: '报销查询',
        path: '',
      },
      {
        image: menu2_6,
        value: '开具证明',
        path: '',
      },
    ];
  }
}
