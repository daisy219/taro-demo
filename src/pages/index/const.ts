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
        value: this.$t('home.healthManagement'),
        path: '',
      },
      {
        image: menu1_2,
        value: this.$t('home.myBenefits'),
        path: '',
      },
      {
        image: menu1_3,
        value: this.$t('home.serviceIntroduction'),
        path: '',
      },
      {
        image: menu1_4,
        value: this.$t('home.onBoardExit'),
        path: '',
      },
      {
        image: menu1_5,
        value: this.$t('home.salaryTool'),
        path: '',
      },
      {
        image: menu1_6,
        value: this.$t('home.callCenter'),
        path: '',
      },
    ];
  }
  
  get secondModuleArr() {
    return  [
      {
        image: menu2_1,
        value: this.$t('home.baseInfo'),
        path: '/pages/baseInfo/index',
      },
      {
        image: menu2_2,
        value: this.$t('home.socialSecurity'),
        path: '/pages/socialSecurity/index',
      },
      {
        image: menu2_3,
        value: this.$t('home.payslip'),
        path: '/pages/payslip/index',
      },
      {
        image: menu2_4,
        value: this.$t('home.housingFund'),
        path: '/pages/housingFund/index',
      },
      {
        image: menu2_5,
        value: this.$t('home.reimbursement'),
        path: '/pages/reimbursement/index',
      },
      {
        image: menu2_6,
        value: this.$t('home.certificateIssuing'),
        path: '/pages/certificateIssuing/index',
      },
    ];
  }
}
