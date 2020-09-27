<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/27
 * desc: 公积金查询页
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtSegmentedControl, AtTabBar } from 'taro-ui-vue';
import { tableConfigType } from '../../types/common.config';

import MyTable from '../../components/myTable.vue';

interface yearListType {
  title: string;
}

@Component({
  name: 'housing-fund-page',
  components: { AtSegmentedControl, AtTabBar, MyTable },
})
export default class HousingFund extends Vue {
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
  private tabList: string[] = ['缴费明细', '中智记录'];
  private yearList: yearListType[] = [{title: '2020'}, {title: '2019'}, {title: '2018'}];
  private currentDetail: number = 0;
  private currentRecord: number = 0;
  private listData: any[] = [
    { base: 1000, date: '2020-1', content: '年调' },
  ];
  private tableConfig: tableConfigType[] = [
    { title: '月缴纳基数', prop: 'base' },
    { title: '执行日期', prop: 'date' },
    { title: '变更内容', prop: 'content' },
  ];
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private handleDetailClick(value): void {
    this.currentDetail = value;
  }

  private handleRecordClick(value) {
    this.currentRecord = value;
  }

}

</script>

<template>
<view class="housing-fund-page">
  <at-segmented-control :onClick="handleDetailClick" :current="currentDetail" :values="tabList" />
  <view v-if="currentDetail === 0" class="align-center">
    <view class="table-title">基本公积金</view>
    <view class="table-info">账号：3232323232</view>

    <view class="housing-table">
      <view class="table-row total-row">
        <text class="label gray-color-font">总计</text>
        <text class="value main-color-font">￥9090</text>
      </view>
      <view class="table-row">
        <text class="label gray-color-font">缴纳基数</text>
        <text class="value main-color-font">￥9090</text>
      </view>
      <view class="table-row">
        <text class="label gray-color-font">公司比例</text>
        <text class="value main-color-font">￥9090</text>
      </view>
      <view class="table-row">
        <text class="label gray-color-font">公司缴纳</text>
        <text class="value main-color-font">￥9090</text>
      </view>
      <view class="table-row">
        <text class="label gray-color-font">个人比例</text>
        <text class="value main-color-font">￥9090</text>
      </view>
      <view class="table-row">
        <text class="label gray-color-font">个人缴费</text>
        <text class="value main-color-font">￥9090</text>
      </view>

    </view>
  </view>

  <view v-if="currentDetail === 1" class="align-center">
    <at-tab-bar :tabList="yearList" :onClick="handleRecordClick" :current="currentRecord" />
    <my-table :data="listData" :config="tableConfig"/>
  </view>
</view>
</template>

<style lang="less">
@import '../../assets/const.less';

.housing-fund-page {
  padding: 50px;
  .housing-table {
    width: 100%;
    border: 1px solid @border-color;
    border-bottom: none;
    margin-top: 20px;
    .table-row {
      font-size: 28px;
      padding: 10px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid @border-color;
    }
    .total-row {
      background-color: @gray-background-color;
    }
  }
  .table-title {
    font-size: 28px;
    line-height: 50px;
    font-weight: bold;
    margin-top: 30px;
    color: @gray-font-color;
  }
  .table-info {
    color: @light-font-color;
    font-size: 24px;
  }
}
</style>
