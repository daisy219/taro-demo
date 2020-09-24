<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/24
 * desc: 薪资查询
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtButton, AtToast } from 'taro-ui-vue';

@Component({
  name: 'payslip',
  components: { AtButton, AtToast },
})
export default class Payslip extends Vue {
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
  private isApply: boolean = false; // data
  private selector: string[] = ['10000', '12000', '14000', '16000', '18000', '20000', '20000以上'];
  private selectorValue: number = 0;
  private toastShow: boolean = false;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private applyPay(): void {
    this.isApply = true;
  };

  private handleChange(e) {
    this.selectorValue = e.detail.value;
  };

  private handleCancel() {

  };

  private save() {
    this.toastShow = true;
    this.isApply = false;
  };

}

</script>

<template>
<view class="payslip-page">
  <view v-if="!isApply">
    <view>
      <text>当前薪资</text>
      <text>10000</text>
    </view>
    <at-button class="margin-top-20" type='primary' size="small" :on-click="applyPay">申请调薪</at-button>
  </view>

  <view v-if="isApply">
    <picker
      mode='selector'
      :range="selector"
      :value="selectorValue"
      @change="handleChange"
      @cancel="handleCancel"
    >
      <view class='demo-list-item'>
        <view class='demo-list-item__label'>期望薪资</view>
        <view class='demo-list-item__value'>
          {{ selector[selectorValue] }}
        </view>
      </view>
    </picker>

    <at-button class="margin-top-20" type='primary' size="small" :on-click="save">保存</at-button>  
  </view>

  <at-toast :isOpened="toastShow" :text="'保存成功'" :icon="'check'" />
</view>
</template>

<style lang="less">
@import '../../assets/const';

.payslip-page {
  padding: 50px;
  font-size: 28px;
  color: @gray-font-color;
  .margin-top-20 {
    margin-top: 20px;
  }
}
</style>
