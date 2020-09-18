<template>
  <view class="home-page-index common-page">
    <view class="clearfix">
      <text class="logo-text">{{ logo }}</text>
      <view class="filter-text">简体中文<van-icon name="arrow-down"/></view>
    </view>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swipe-image" />
      </van-swipe-item>
    </van-swipe>
    <van-row class="second-module">
      <van-col span="8" v-for="item in secondModuleArr" :key="item.icon" class="second-item">
        <van-image width="50" height="50" fit="contain" :src="menu[item.icon]" />
        <view class="item-title">{{ item.title }}</view>
      </van-col>
    </van-row>
    <view class="bg-wrap">
      <van-image width="100%" height="150px" fit="fill" :src="bgImg" />
    </view>

    <van-row class="first-module" type="flex" justify="space-between">
      <van-col span="7" v-for="(item, index) in firstModuleArr.slice(0, 3)" :key="item.icon" class="first-item">
        <van-image width="34" height="34" fit="fill" :src="menu[item.icon]" />
        <view class="item-title">{{ item.title }}</view>
      </van-col>
    </van-row>
    <van-row class="first-module" type="flex" justify="space-between">
      <van-col span="7" v-for="(item, index) in firstModuleArr.slice(3, 6)" :key="item.icon" class="first-item">
        <van-image width="34" height="34" fit="fill" :src="menu[item.icon]" />
        <view class="item-title">{{ item.title }}</view>
      </van-col>
    </van-row>
  </view>
</template>

<script>
import './index.less';
import { firstModuleArr, secondModuleArr } from './const';
import menu1_1 from '../../assets/image/home/menu1-1.png';
import menu1_2 from '../../assets/image/home/menu1-2.png';
import menu1_3 from '../../assets/image/home/menu1-3.png';
import menu1_4 from '../../assets/image/home/menu1-4.png';
import menu1_5 from '../../assets/image/home/menu1-5.png';
import menu1_6 from '../../assets/image/home/menu1-6.png';
import menu2_1 from '../../assets/image/home/menu2-1.png';
import menu2_2 from '../../assets/image/home/menu2-2.png';
import menu2_3 from '../../assets/image/home/menu2-3.png';
import menu2_4 from '../../assets/image/home/menu2-4.png';
import menu2_5 from '../../assets/image/home/menu2-5.png';
import menu2_6 from '../../assets/image/home/menu2-6.png';
import bgImg from '../../assets/image/home/bg.jpg';
// const test = require('../../assets/image/home/menu1-1.png');

export default {
  data () {
    return {
      menu: {
        menu1_1: menu1_1,
        menu1_2: menu1_2,
        menu1_3: menu1_3,
        menu1_4: menu1_4,
        menu1_5: menu1_5,
        menu1_6: menu1_6,
        menu2_1: menu2_1,
        menu2_2: menu2_2,
        menu2_3: menu2_3,
        menu2_4: menu2_4,
        menu2_5: menu2_5,
        menu2_6: menu2_6,
      },
      bgImg: bgImg,
      firstModuleArr: firstModuleArr,
      secondModuleArr: secondModuleArr,
      logo: 'ciic',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  }
}
</script>
