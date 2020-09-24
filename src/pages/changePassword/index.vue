<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/24
 * desc: 修改密码页
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtInput, AtForm, AtButton, AtToast } from 'taro-ui-vue';
import { waitTime } from '../../utils/index';
import Taro from '@tarojs/taro';

interface infoType {
  tel: string;
  authCode: string;
  password: string;
  confirmPassword: string;
}
@Component({
  name: 'change-password-page',
  components: { AtInput, AtForm, AtButton, AtToast },
})
export default class ChangePassword extends Vue {
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
  private info: infoType = {
    tel: '',
    authCode: '',
    password: '',
    confirmPassword: '',
  };
  private toastText: string = '';
  private toastShow: boolean = false;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private async onSubmit (event) {
    console.log(this.info);
    this.toastText = '保存成功';
    this.toastShow = true;
    await waitTime(1000);
    Taro.redirectTo({
      url: '/pages/baseInfo/index',
    });
  };

  private getAuthCode() {
    this.toastText = '发送成功';
    this.toastShow = true;
  }

}

</script>

<template>
<view class="change-password-page gray-color-font">
  <at-form>
    <at-input name='tel' title='手机号' type='text' placeholder='请输入绑定的手机号' :value="info.tel" />
    <at-input name='authCode' title='验证码' type='text' placeholder='请输入验证码' :value="info.authCode" >
      <at-button formType='submit' size="small" type="primary" :onClick="getAuthCode">获取验证码</at-button>
    </at-input>
    <at-input name='password' title='新密码' type='text' placeholder='密码至少6位，同时含有大小写字母和数字' :value="info.password" />
    <at-input name='confirmPassword' title='重复密码' type='text' placeholder='密码至少6位，同时含有大小写字母和数字' :value="info.confirmPassword" />
    <at-button class="confirm-btn" formType='submit' :onClick="onSubmit" size="small" type="primary" :circle="true">确认</at-button>
  </at-form>

  <at-toast :isOpened="toastShow" :text="toastText" :icon="'check'" />
</view>
</template>

<style lang="less">
.change-password-page {
  padding: 50px 30px;
  .confirm-btn {
    margin-top: 20px;
  }
}
</style>
