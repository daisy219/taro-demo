<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/21
 * desc: 语言设置弹框
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtModal, AtModalHeader, AtModalContent } from 'taro-ui-vue'

@Component({
  name: '',
  components: {
    AtModal,
    AtModalHeader,
    AtModalContent,
  },
})
export default class LanguageDialog extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private isOpened!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private isOpened: boolean = true; // data
  // get computed_data(): string { return 'computed' } // computed

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private changeLanguage(type): void {
    this.$i18n.locale = type;
    console.log(this.$i18n.locale);
    this.$emit('close');
  }

}

</script>

<template>
<view class="language-dialog-page">
  <AtModal isOpened>
    <AtModalHeader>标题</AtModalHeader>
    <AtModalContent>
      <view @tap="changeLanguage('cn')">简体中文</view>
      <view @tap="changeLanguage('en')">English</view>
    </AtModalContent>
  </AtModal>
</view>
</template>

<style lang="less" scoped>
// .language-dialog-page {

// }
</style>
