<template>
  <view class="home-page-index common-page">
    <view class="top-line">
      <text class="logo-text">{{ logo }}</text>
      <view class="filter-text" @tap="switchLanguage">简体中文
        <at-icon value='chevron-down' size='14' color='#fff'></at-icon>
      </view>
    </view>
    <swiper
      :current="1"
      :autoplay="true"
      :duration="500"
      :interval="5000">
      <swiper-item v-for="(image, index) in images" :key="index">
        <image class="swipe-image" :src="image"/>
      </swiper-item>
    </swiper>
    <view class="second-module">
      <at-grid :data="secondModuleArr" :onClick="jumpTo"/>
    </view>
    <view class="bg-wrap">
      <image class="bg-img" :src="bgImg" />
    </view>

    <view class="second-module">
      <at-grid :data="firstModuleArr" :onClick="jumpTo"/>
    </view>

    <language-dialog :is-opened="languageDialogShow" @close="languageDialogShow = false"/>
  </view>
</template>

<script lang="ts">

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtButton, AtIcon, AtGrid } from 'taro-ui-vue';
import { LOGO } from '../../const/common';

import LanguageDialog from './components/languageDialog.vue';
import HomePageConst from './const';
import bgImg from '../../assets/image/home/bg.jpg';
import Taro from '@tarojs/taro';
import './index.less';

@Component({
  name: 'home-page',
  components: {
    AtButton, AtIcon, AtGrid, LanguageDialog
  },
  mixins: [HomePageConst],
})
export default class HomePage extends Vue {

  private bgImg: any = bgImg;
  private languageDialogShow: boolean = false;
  private logo: string = LOGO;
  private images: string[] = [
    'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
    'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
  ];

  private jumpTo(item) {
    Taro.navigateTo({
      url: item.path,
    });
  };
  /** 切换语言 */
  private switchLanguage() {
    this.languageDialogShow = true;
  };
}
</script>
