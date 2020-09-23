<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/21
 * desc: 基本信息页
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtAvatar, AtTag, AtIcon, AtTabs, AtTabsPane  } from 'taro-ui-vue';
import BaseInfo from './components/baseInfo.vue';

@Component({
  name: 'base-info-page',
  components: { AtAvatar, AtTag, AtIcon, AtTabs, AtTabsPane, BaseInfo },
})
export default class BaseInfoPage extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  private created() {
  }
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private current1: number = 0;
  private tabList1: any[] = [
    { title: '基本信息' },
    { title: '户籍信息' },
    { title: '子女信息' },
    { title: '报销卡信息' },
  ];
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private handleClick(value) {
    this.current1 = value;
  }

}

</script>

<template>
<view class="base-info-page">
  <view class="top-content clearfix">
    <AtAvatar class="employee-image" circle image='https://jdc.jd.com/img/200'></AtAvatar>
    <view class="fl employee-info">
      <view>
        <text class="employee-name">小明</text>
        <AtTag type='primary' size="small" :active="true">
          <AtIcon class="info-icon" value='credit-card' size='14' color='#fff' @tap.native="close" />中智雇员
        </AtTag>
      </view>
      <view class="employee-no">
        <text>中智雇员编号</text>
        <text>WY212932</text>
      </view>
    </view>
  </view>

  <AtTabs
    :swipeable="false"
    :current="current1"
    :tabList="tabList1"
    :onClick="handleClick"
    >
    <AtTabsPane :current="current1" :index="0">
      <base-info />
    </AtTabsPane>
    <AtTabsPane :current="current1" :index="1">
      <view class='tab-content'>标签页二的内容</view>
    </AtTabsPane>
    <AtTabsPane :current="current1" :index="2">
      <view class='tab-content'>标签页三的内容</view>
    </AtTabsPane>
  </AtTabs>
</view>
</template>

<style lang="less">
// @import '~@/assets/stylus/var'
.base-info-page {
  padding: 30px 40px;
  .top-content {
    padding: 0 80px;
    .employee-image {
      margin-top: 10px;
      float: left;
    }
    .employee-info {
      margin-left: 40px;
      .employee-name {
        font-size: 30px;
        line-height: 50px;
      }
      .employee-no {
        font-size: 22px;
        line-height: 40px;
      }
    }
  }
}

</style>
