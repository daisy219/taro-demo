<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/23
 * desc: 户籍类型
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtInput, AtIcon } from 'taro-ui-vue';

interface householdInfoType {
  address: string;
  type: number;
  liveStreet: string;
  zipCode: string;
}

@Component({
  name: 'house-hold-type',
  components: { AtInput, AtIcon },
})
export default class HouseholdType extends Vue {
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
  private householdInfo: householdInfoType = {
    address: '上海市徐汇区建汇大厦',
    type: 1,
    liveStreet: '衡山路',
    zipCode: '200030',
  };
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}

}

</script>

<template>
<view class="household-type-page">
  <view class="info-card">
    <view class="top-line">
      <view class="gray-color-font"><at-icon value='bookmark' class="margin-right-10" size='14' color='#909399'/>户籍信息</view>
    </view>
    <view class="info-line">
      <view>户籍地址</view>
      <at-input class="info-input" name='address' type='text' :value="householdInfo.address" disabled/>
    </view>
    <view class="info-line">
      <view>户籍类别</view>
      <at-input class="info-input" name='type' type='text' :value="householdInfo.type === 1 ? '城镇' : '农村'" disabled/>
    </view>
    <view class="info-line">
      <view>居住地街道</view>
      <at-input class="info-input" name='liveStreet' type='text' :value="householdInfo.liveStreet" disabled/>
    </view>
    <view class="info-line">
      <view>邮政编码</view>
      <at-input class="info-input" name='zipCode' type='text' :value="householdInfo.zipCode" disabled/>
    </view>
  </view>
</view>
</template>

<style lang="less">

</style>
