<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/27
 * desc: 报销查询
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { tableConfigType } from '../../types/common.config';

import MyTable from '../../components/myTable.vue';


@Component({
  name: 'reimbursement',
  components: { MyTable },
})
export default class Reimbursement extends Vue {
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
  private listData: any[] = [
    { content: '话费报销', date: '2020-1', count: 323232, state: '已报销' },
  ];

  private tableConfig: tableConfigType[] = [
    { title: '报销内容', prop: 'content' },
    { title: '金额', prop: 'count' },
    { title: '申请日期', prop: 'date' },
    { title: '状态', prop: 'state' },
  ]
  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  // private some_method(): void {}

}

</script>

<template>
<view class="reimbursement-page">
  <my-table :data="listData" :config="tableConfig"/>
</view>
</template>

<style lang="less">
.reimbursement-page {
  padding: 50px;
}
</style>
