import { Vue, Component } from 'vue-property-decorator';
import health_1 from '../../assets/image/health/health-1.png';
import health_2 from '../../assets/image/health/health-2.png';
import health_3 from '../../assets/image/health/health-3.png';
import health_4 from '../../assets/image/health/health-4.png';

@Component
export default class HomePageConst extends Vue {
  get moduleArr() {
    return [
      {
        image: health_1,
        value: '预约体检',
        path: '/pages/healthManagement/index',
        color: '#83c6c2',
      },
      {
        image: health_2,
        value: '我的预约',
        path: '/pages/healthManagement/index',
        color: '#dd6572',
      },
      {
        image: health_3,
        value: '体检报告',
        path: '/pages/healthManagement/index',
        color: '#7dc5eb',
      },
      {
        image: health_4,
        value: '购买体检',
        path: '/pages/healthManagement/index',
        color: '#efb336',
      },
    ];
  }
}