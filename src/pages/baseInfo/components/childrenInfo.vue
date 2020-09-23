<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/23
 * desc: 子女信息
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtButton } from 'taro-ui-vue';

@Component({
  name: '',
  components: { AtButton },
})
export default class ChildrenInfo extends Vue {
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
<view class="childrenInfo-page">
  <at-button size="small">添加子女</at-button>
</view>
</template>

<style lang="less">

</style>
