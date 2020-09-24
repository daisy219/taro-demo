<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/22
 * desc: 
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtIcon, AtInput, AtToast, AtButton } from 'taro-ui-vue';
import Taro from '@tarojs/taro';

interface userInfoType {
  name: string;
  empNo: string;
  tel: string;
  address: string;
  email: string;
  idNo: string;
}
@Component({
  name: '',
  components: { AtIcon, AtInput, AtToast, AtButton },
})
export default class BaseInfoInnerPage extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */

  private userInfo: userInfoType = {
    name: '小明',
    empNo: 'W20D213',
    tel: '13900022222',
    address: '上海市徐汇区建汇大厦',
    email: 'xixihaha@163.com',
    idNo: '3232321331321321',
  };
  private isEdit: boolean = false;
  private toastShow: boolean = false;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private edit() {
    if (this.isEdit) {
      this.toastShow = true;
    }
    this.isEdit = !this.isEdit;
  };

  private toChangePassword() {
    Taro.redirectTo({
      url: '/pages/changePassword/index',
    });
  }

}

</script>

<template>
<view class="base-info-inner-page">
  <view class="info-card">
    <view class="top-line clearfix">
      <view class="fl gray-color-font">
        <at-icon value='bookmark' size='14' color='#909399'/>基本信息
      </view>
      <view class="fr main-color-font" @tap="edit">
        <at-icon value='edit' size='14' color='#246FBC'/>{{ isEdit ? '保存' :  '编辑'}}
      </view>
    </view>
    <view class="info-line">
      <view>姓名</view>
      <at-input class="info-input" name='name' type='text' :value="userInfo.name" disabled/>
    </view>
    <view class="info-line">
      <view>中智雇员编号</view>
      <at-input class="info-input" name='empNo' type='text' :value="userInfo.empNo" disabled/>
    </view>
    <view class="info-line">
      <view>手机</view>
      <at-input class="info-input" name='tel' type='text' :value="userInfo.tel" disabled/>
    </view>
    <view class="info-line">
      <view>居住地址</view>
      <at-input class="info-input" name='address' type='text' :value="userInfo.address" :disabled="!isEdit"/>
    </view>
    <view class="info-line">
      <view>邮箱</view>
      <at-input class="info-input" name='email' type='text' :value="userInfo.email" :disabled="!isEdit"/>
    </view>
    <view class="info-line">
      <view>证件号码</view>
      <at-input class="info-input" name='idNo' type='text' :value="userInfo.idNo" disabled/>
    </view>
  </view>
  <view class="info-card btn-card" @tap="toChangePassword">修改密码</view>
  <view class="info-card btn-card">隐私条款</view>
  <at-button size="small" type="primary">注销账户</at-button>
  <at-toast :isOpened="toastShow" :text="'保存成功'" :icon="'check'" />
</view>
</template>

<style lang="less">
@import '../../../assets/const.less';
.base-info-inner-page {
  .at-button--primary {
    background-color: #F56C6C;
    border-color: #F56C6C;
  }
}

</style>
