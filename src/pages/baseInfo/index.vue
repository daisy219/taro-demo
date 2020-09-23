<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/21
 * desc: 基本信息页
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtAvatar, AtTag, AtIcon, AtTabs, AtTabsPane  } from 'taro-ui-vue';
import avatar from '../../assets/image/common/avatar.jpg';
import BaseInfo from './components/baseInfo.vue';
import HouseholdType from './components/householdType.vue';
import ChildrenInfo from './components/childrenInfo.vue';
import CardInfo from './components/cardInfo.vue';

interface tabListItemType {
  title: string,
}

@Component({
  name: 'base-info-page',
  components: { 
    AtAvatar,
    AtTag,
    AtIcon,
    AtTabs,
    AtTabsPane,
    BaseInfo,
    HouseholdType,
    ChildrenInfo,
    CardInfo
  },
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
  private current: number = 0;
  private avatar: any = avatar;
  private tabList: tabListItemType[] = [
    { title: '基本信息' },
    { title: '户籍信息' },
    { title: '子女信息' },
    { title: '报销信息' },
  ];
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private handleClick(value) {
    this.current = value;
  }

}

</script>

<template>
<view class="base-info-page">
  <view class="top-content clearfix">
    <at-avatar class="employee-image" circle :image="avatar"></at-avatar>
    <view class="fl employee-info">
      <view>
        <text class="employee-name">小明</text>
        <at-tag type="primary" size="small" :active="true">
          <at-icon class="info-icon" value="credit-card" size="14" color="#fff" @tap.native="close" />中智雇员
        </at-tag>
      </view>
      <view class="employee-no">
        <text>中智雇员编号</text>
        <text>WY212932</text>
      </view>
    </view>
  </view>

  <at-tabs
    :swipeable="false"
    :current="current"
    :tabList="tabList"
    :onClick="handleClick"
    >
    <at-tabs-pane class="tab-content" :current="current" :index="0">
      <base-info />
    </at-tabs-pane>
    <at-tabs-pane class="tab-content" :current="current" :index="1">
      <household-type />
    </at-tabs-pane>
    <at-tabs-pane class="tab-content" :current="current" :index="2">
      <children-info />
    </at-tabs-pane>
    <at-tabs-pane class="tab-content" :current="current" :index="3">
      <card-info />
    </at-tabs-pane>
  </at-tabs>
</view>
</template>

<style lang="less">
@import '../../assets/const.less';
@import './index.less';

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
  .tab-content {
    margin-top: 20px;
    padding: 0 20px;
  }
}

</style>
