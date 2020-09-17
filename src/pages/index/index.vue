<template>
  <view class="home-page-index">
    <view class="clearfix">
      <text class="logo-text">{{ logo }}</text>
      <view class="filter-text">简体中文<van-icon name="arrow-down"/></view>
    </view>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swipe-image" />
      </van-swipe-item>
    </van-swipe>

    <view class="">
      <view v-for="item in firstModuleArr" :key="item.icon">
        <!-- <img :src="require('../../assets/image/home/menu1-1.png')"/> -->
        <van-image width="30px" height="30px" fit="cover" :src="require('../../assets/image/home/menu1-1.png')"/>
      </view>
    </view>
  </view>
</template>

<script>
import './index.less';
import { firstModuleArr } from './const';

export default {
  data () {
    return {
      firstModuleArr: firstModuleArr,
      logo: 'ciic',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  }
}
</script>
