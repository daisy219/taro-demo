<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/21
 * desc: 语言设置弹框
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtModal, AtModalHeader, AtModalContent, AtIcon } from 'taro-ui-vue'

@Component({
  name: '',
  components: {
    AtModal,
    AtModalHeader,
    AtModalContent,
    AtIcon
  },
})
export default class LanguageDialog extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  @Prop() private isOpened!: false;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  // private isOpened: boolean = true; // data
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private changeLanguage(type): void {
    this.$i18n.locale = type;
    this.$emit('close');
  }

  private close() {
    this.$emit('close');
  }

}

</script>

<template>
<view class="language-dialog-page">
  <at-modal :isOpened="isOpened">
    <at-modal-header>切换语言
      <at-icon value='close-circle' size='20' color='#909399' @tap.native="close" />
    </at-modal-header>
    <at-modal-content>
      <view class="lang-type" @tap="changeLanguage('cn')">简体中文</view>
      <view class="lang-type" @tap="changeLanguage('en')">English</view>
    </at-modal-content>
  </at-modal>
</view>
</template>

<style lang="less">
@import '../../../assets/const.less';

.language-dialog-page {
  .lang-type {
    font-size: 20px;
    line-height: 100px;
    text-align: center;
  }
  .at-icon-close-circle {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
