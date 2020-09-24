<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/24
 * desc: 通用表格组件
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { tableConfigType } from '../types/common.config';

@Component({
  name: 'my-table',
  components: {},
})
export default class MyTable extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop() private data!: any[];
  @Prop() private config!: tableConfigType[];
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */


  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}

}

</script>

<template>
<view class="my-table-page">
  <view class="table-row head-row">
    <view class="table-cell" v-for="head in config" :key="head.title">{{ head.title }}</view>
  </view>
  <view class="table-row" v-for="(row, index) in data" :key="index">
    <view class="table-cell" v-for="cell in config" :key="cell.prop">{{ row[cell.prop] }}</view>
  </view>
</view>
</template>

<style lang="less">
@import '../assets/const.less';
.my-table-page {
  border: 1px solid @border-color;
  font-size: 28px;
  color: @gray-font-color;
  .head-row {
    background-color: @light-background-color;
  }
  .table-row {
    display: flex;
    align-items: center;
    padding: 10px 0;
    .table-cell {
      flex: 1;
    }
  }
}
</style>
