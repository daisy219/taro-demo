<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/23
 * desc: 报销卡信息
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtIcon, AtInput, AtToast } from 'taro-ui-vue';

interface cardInfoType {
  type: number;
  openBank: string;
  cardNo: string;
  openPlace: string;
}
@Component({
  name: '',
  components: { AtIcon, AtInput, AtToast },
})
export default class CardInfo extends Vue {
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
  private cardInfo: cardInfoType = {
    type: 0,
    openBank: '中国工商银行上海支行',
    cardNo: '323232323232323232',
    openPlace: '上海',
  };
  private toastShow: boolean = false;
  private selector: string[] = ['工商银行', '建设银行'];
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private save(): void {
    this.toastShow = true;
  }
  /** 银行种类选择取消 */
  private typeHandleCancelType() {

  }
  /** 银行种类选择 */
  private typeHandleChange(e) {
    this.cardInfo.type = e.target.value;
  }

}

</script>

<template>
<view class="cardInfo-page">
  <view class="info-card">
    <view class="top-line clearfix">
      <view class="fl gray-color-font">
        <at-icon value='bookmark' class="margin-right-10" size='14' color='#909399'/>报销卡信息
      </view>
      <view class="fr main-color-font" @tap="save">
        <at-icon value='edit' class="margin-right-10" size='14' color='#246FBC'/>保存
      </view>
    </view>
    <view class="info-line danger-color-font ">
      <text>若您的公司已为您购买我司各类报销产品（例如补充医疗保险），请完善你的银行卡信息</text>
    </view>
    <view class="info-line">
      <picker mode='selector' :range="selector" :value="cardInfo.type" @change="typeHandleChange" @cancel="typeHandleCancelType">
        <view class='demo-list-item'>
          <view class='demo-list-item__label'>银行种类</view>
          <view class='demo-list-item__value'>
            {{ selector[cardInfo.type] }}
          </view>
        </view>
      </picker>
    </view>
    <view class="info-line">
      <view>开户银行</view>
      <at-input class="info-input" name='openBank' type='text' :value="cardInfo.openBank" />
    </view>
    <view class="info-line">
      <view>卡号</view>
      <at-input class="info-input" name='cardNo' type='text' :value="cardInfo.cardNo" />
    </view>
    <view class="info-line">
      <view>开户地</view>
      <at-input class="info-input" name='openPlace' type='text' :value="cardInfo.openPlace" />
    </view>
  </view>

  <at-toast :isOpened="toastShow" :text="'保存成功'" :icon="'check'" />
</view>
</template>

<style lang="less">

</style>
