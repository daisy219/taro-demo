<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/27
 * desc: 开具证明
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtCheckbox, AtButton, AtToast } from 'taro-ui-vue';
import { selectConfigType } from '../../types/common.config';

@Component({
  name: 'certificate-issuing',
  components: { AtCheckbox, AtButton, AtToast },
})
export default class CertificateIssuing extends Vue {
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
  private checkboxOption: selectConfigType[] = [
    {
      value: '1',
      label: '在职证明'
    },
    {
      value: '2',
      label: '离职证明'
    },
  ];
  private checkedList: string[] = [];
  private toastShow: boolean = false;
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private handleChange(value): void {
    this.checkedList = value;
  };

  private applyHandle() {
    this.toastShow = true;
  }

}

</script>

<template>
<view class="certificate-issuing-page">
  <view class="info">您可以在线申请以下证明</view>
  <at-checkbox :options="checkboxOption" :selectedList="checkedList" :onChange="handleChange" />
  <at-button type='primary' size="small" :on-click="applyHandle" :disabled="checkedList.length === 0">立即申请</at-button>
  <at-toast :isOpened="toastShow" :text="'申请成功'" :icon="'check'" />
</view>
</template>

<style lang="less">
@import '../../assets/const';

.certificate-issuing-page {
  padding: 50px;
  text-align: center;
  .info {
    font-size: 20px;
    color: @light-font-color;
    margin-bottom: 50px;
  }
  .at-checkbox {
    margin-bottom: 50px;
  }
}
</style>
