<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/22
 * desc: 
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtIcon } from 'taro-ui-vue';

@Component({
  name: '',
  components: { AtIcon },
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
  // private my_data: string = 'some thing'; // data
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}

}

</script>

<template>
<view class="base-info-inner-page">
  <view class="info-card">
    <view class="fl">
      <AtIcon value='bookmark' size='14' color='#909399'/>基本信息
    </view>
    <view class="fr main-color-font">
      <AtIcon value='edit' size='14' color='#246FBC'/>编辑
    </view>
  </view>
</view>
</template>

<style lang="less">
@import '../../../assets/const.less';
.base-info-inner-page {
  font-size: 28px;
  line-height: 60px;
  .info-card {
    border-radius: 10px;
    // background-color: @white-color;
  }
}

</style>
